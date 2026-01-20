import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import chicagoDoodle from '../../images/chicago_doodle.png';
import {
  PageContainer,
  HeaderContainer,
  HeaderTextContainer,
  PageTitle,
  TitleImage,
  TitleContainer,
  InlineTitleImage,
  PageSubtitle,
  NeighborhoodSection,
  SectionHeader,
  NeighborhoodName,
  ToggleIcon,
  SectionContent,
  ContentList,
  ContentItem,
  RecommendationHeader,
  ContentBlock
} from './styled';

const neighborhoodData = [
  {
    name: "Near the Hotel (Magnificent Mile)",
    subtitle: "shopping, lakefront, Navy Pier [<1 mile from the hotel]",
    activities: [
      "Shop on the Magnificent Mile.",
      "Walk, run, or bike along Chicago's sublime lakefront trail.",
      "Check out Navy Pier, a touristy spot where you can enjoy the lake, ride a giant Ferris wheel, and sometimes see shows. The Chicago Children's Museum is located here."
    ],
    food: [
      { name: "Giordano's [$$]", desc: "Try deep dish pizza at the chain where we bring our out-of-town guests." },
      { name: "RAMEN-SAN Deluxe [$$]", desc: "Almost too trendy, but the sushi and ramen are really good." },
      { name: "Aster Hall [$-$$]", desc: "Go to the fifth level of 900 North Michigan Shops for a classy version of a mall food court, with food options ranging from sushi to tacos to Chicago dogs." },
      { name: "Eataly [$$-$$$]", desc: "A giant Italian emporium with sit-down restaurants inside." }
    ]
  },
  {
    name: "The Loop",
    subtitle: "The Bean, rock climbing, art museum [~1 mile from the hotel]",
    activities: [
      "Visit Cloud Gate, aka “the Bean” in Millennium Park.",
      "Visit the Art Institute of Chicago and view works like A Sunday on La Grande Jatte and American Gothic. If you can, try to see Paradise Lost by Raqib Shaw, an epic 100-foot-long work, and let us know what you think!",
      "Boulder at First Ascent Block 37, Eli's climbing gym."
    ]
  },
  {
    name: "River North",
    subtitle: "Riverwalk and doughnuts [~1 mile from the hotel]",
    activities: [
      "Enjoy views along the Chicago Riverwalk. Then try the almond old-fashioned doughnuts at Doughnut Vault [$]. Arrive early (before 10 am) so you get there before the doughnuts sell out."
    ]
  },
  {
    name: "West Loop",
    subtitle: "gourmet restaurants and interesting stores [~2 miles from the hotel]",
    activities: [
      "Explore the neighborhood where we've lived for the past year and a half. Enjoy the storefronts along Randolph Street, and if you can keep walking, you can visit the Patagonia store, which has an area dedicated to selling lightly used clothing."
    ],
    food: [
      { name: "Aba [$$$]", desc: "One of our favorite spots for bringing guests. Delicious Mediterranean food served in a beautiful space with a great rooftop. Make a reservation in advance!" },
      { name: "Bonci [$]", desc: "Try as many flavors of Roman pizza as you want at this spot, where slabs of pizza are cut with scissors and sold by weight!" },
      { name: "Swadesi [$]", desc: "A bit further from the others, this is Francesca's favorite coffee shop, with South Asian-inspired cafe items such as a delicious breakfast sandwich with a crispy potato patty, and extravagant chai, coffee, and matcha specialty drinks." }
    ]
  },
  {
    name: "Lincoln Park",
    subtitle: "free zoo and a peaceful neighborhood [~2 miles from the hotel]",
    activities: [
      "Visit the red pandas and other animals at the free Lincoln Park Zoo, then take a tranquil walk around Lincoln Park (the park and the neighborhood)."
    ]
  },
  {
    name: "South Loop",
    subtitle: "Bruno Mars, aquarium, natural history museum, and escape rooms [~3 miles from the hotel]",
    activities: [
      "If you can somehow get tickets, Bruno Mars is performing at Soldier Field on May 16. While in the area, check out the Shedd Aquarium or Field Museum, or try out our favorite escape rooms at Fox in a Box."
    ]
  },
  {
    name: "West Town",
    subtitle: "thrift stores and some of our favorite food [~3 miles from the hotel]",
    activities: [
      "Walk around this neighborhood and pop into fun stores like The Happy Hour Shop and The Center for Order and Experimentation. If you want to visit the famed Kasama for breakfast, we recommend ordering online so that you can avoid standing in line for hours (literally)."
    ],
    food: [
      { name: "Gangnam Market [$-$$]", desc: "Standing under the cheerful neon signs and shopping the perfectly curated aisles at this Asian grocery store always makes us happy. There's a large food court with options like ramen and bakery items (including Portuguese egg tarts)." },
      { name: "Tempesta Market [$$]", desc: "In addition to the sandwiches, the chicken and dumpling soup with calabrian chili and 'nduja arancini are definitely worth trying." },
      { name: "Kasia's Deli [$]", desc: "A bit further away (technically in Ukrainian Village), this charming deli was also briefly featured on The Bear. Try the pierogi that are a staple dinner for us on busy nights!" },
      { name: "Paulo Gelato [$]", desc: "Francesca's favorite ice cream!" },
      { name: "Hoosier Mama Pie Company [$]", desc: "A cozy spot with a secret back patio. All the pie slices are delicious but we especially recommend the spinach artichoke galette and the heavenly coconut cream pie." }
    ]
  },
  {
    name: "Chinatown",
    subtitle: "restaurants galore [~4 miles from the hotel]",
    food: [
      { name: "Dongpo Impression [$$]", desc: "If you like spicy food, try the dry chili eggplant, one of our favorite dishes in Chicago. The green peppercorn fish and dry chili chicken are also great." },
      { name: "Dim sum restaurants", desc: "All the dim sum restaurants (Minghin, Triple Crown, Phoenix, etc.) are solid options." }
    ],
    activities: [
      "Take a post-meal walk in Ping Tom Park, which has a great view of the city. The Chinatown Branch of the Chicago Public Library is also nice."
    ]
  },
  {
    name: "Pilsen",
    subtitle: "Mexican art museum and delicious food [~5 miles from the hotel]",
    activities: [
      "Visit the beautiful space and thought-provoking exhibits at the National Museum of Mexican Art."
    ],
    food: [
      { name: "La Esperanza [$$]", desc: "The pozole verde available on weekends is delicious and a huge portion!" },
      { name: "La Michoacana [$]", desc: "A brightly colored shop that sells ice cream and paletas." }
    ]
  },
  {
    name: "Wicker Park",
    subtitle: "more vintage stores in a fun area [~4 miles from the hotel]",
    activities: [
      "You could spend the whole day thrifting here, at stores like Happy Belated Clothing (where used clothing from Japan is sold by the pound), Crossroads Trading, and Kokorokoko. Wicker Park (the park itself) is very pleasant on a sunny day, as is a stroll along The 606, an elevated urban trail."
    ]
  },
  {
    name: "Hyde Park",
    subtitle: "Museum of Science and Industry and UChicago [~9 miles from the hotel]",
    activities: [
      "See the tiny replica model of a train traveling from Chicago to Seattle in the Museum of Science and Industry, along with other marvels related to transportation, atmospheric phenomena, and more.",
      "Then, take a walk around the Garden of the Phoenix, a Japanese garden located within Jackson Park.",
      "Visit the picturesque campus of the University of Chicago."
    ],
    food: [
      { name: "Virtue [$$$]", desc: "An acclaimed restaurant owned by Chef Erick Williams, Virtue describes itself as “a Southern American restaurant that leads with a culture of hospitality & kindness.” Nearby is the spot where Barack and Michelle Obama shared their first kiss outside a Baskin-Robbins." },
      { name: "Roux [$$]", desc: "Roux also serves delicious Southern dishes and is a perfect spot for brunch." }
    ]
  }
];

function ThingsToDoPage() {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(i => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <>
      <NavBar tab={"Things to do"} />
      <PageContainer>
        <HeaderContainer>
          <HeaderTextContainer>
            <TitleContainer>
              <PageTitle>Things to Do</PageTitle>
              <InlineTitleImage src={chicagoDoodle} alt="Chicago Doodle" />
            </TitleContainer>
            <PageSubtitle>
              It would be impossible to do justice to all of the wonderful things to do in Chicago, but here's a small selection, grouped by neighborhood.
            </PageSubtitle>
          </HeaderTextContainer>
          <TitleImage src={chicagoDoodle} alt="Chicago Doodle" />
        </HeaderContainer>

        {neighborhoodData.map((neighborhood, index) => (
          <NeighborhoodSection key={index}>
            <SectionHeader onClick={() => toggleSection(index)}>
              <NeighborhoodName>
                {neighborhood.name}
                <span>{neighborhood.subtitle}</span>
              </NeighborhoodName>
              <ToggleIcon isOpen={openSections.includes(index)}>+</ToggleIcon>
            </SectionHeader>
            <SectionContent isOpen={openSections.includes(index)}>
              {neighborhood.activities && (
                <ContentBlock>
                  <ContentList>
                    {neighborhood.activities.map((activity, aIndex) => (
                      <ContentItem key={aIndex}>{activity}</ContentItem>
                    ))}
                  </ContentList>
                </ContentBlock>
              )}
              {neighborhood.food && (
                <ContentBlock>
                  <RecommendationHeader>Food recommendations</RecommendationHeader>
                  <ContentList>
                    {neighborhood.food.map((food, fIndex) => (
                      <ContentItem key={fIndex}>
                        <strong>{food.name}:</strong> {food.desc}
                      </ContentItem>
                    ))}
                  </ContentList>
                </ContentBlock>
              )}
            </SectionContent>
          </NeighborhoodSection>
        ))}
      </PageContainer>
    </>
  );
}

export default ThingsToDoPage;

