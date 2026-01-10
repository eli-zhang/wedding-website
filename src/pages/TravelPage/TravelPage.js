import NavBar from '../../components/NavBar/NavBar';
import { 
  ContentSection, ContentTextContainer, ContentTitle, ContentBody, 
  ContentSubsection, ContentSubsectionTitle, ContentImageContainer, 
  ContentImageBackground, ContentImageTravel 
} from './styled';

function TravelPage() {
  return (
    <>
      <NavBar tab={"Travel"} />
      <ContentSection>
        <ContentTextContainer>
          <ContentTitle>Travel</ContentTitle>
          
          <ContentSubsection>
            <ContentSubsectionTitle>How to reach Chicago</ContentSubsectionTitle>
            <ContentBody>
              Chicago is easily accessible by plane, train, or car. The city is served by two major airports: 
              <b> O'Hare International Airport (ORD)</b> and <b>Midway International Airport (MDW)</b>.
            </ContentBody>
          </ContentSubsection>

          <ContentSubsection>
            <ContentSubsectionTitle>How to get downtown</ContentSubsectionTitle>
            <ContentBody>
              Both airports offer convenient transportation options to downtown Chicago, including the CTA Blue Line from O'Hare 
              and the Orange Line from Midway. If you're driving, Chicago is well-connected via major highways, and there are 
              numerous parking options available throughout the city.
            </ContentBody>
          </ContentSubsection>

          <ContentSubsection>
            <ContentSubsectionTitle>Where to stay</ContentSubsectionTitle>
            <ContentBody>
              <b>Lodging</b>
            </ContentBody>
            <ContentBody>
              Hotel blocks TBD. Please check back for more information.
            </ContentBody>
            <ContentBody>
              If you are interested in finding accommodations on your own: Rather than staying in the immediate vicinity of Garfield Park Conservatory, we recommend the following neighborhoods if you're unfamiliar with Chicago to prioritize safety and proximity to "downtown" tourist attractions:
            </ContentBody>
            <ContentBody>
              <b>West Loop/Fulton Market:</b> This is the neighborhood where we live. It is relatively close to the wedding venue and is full of the trendiest restaurants and bars, though they can be expensive.
            </ContentBody>
            <ContentBody>
              <b>The Loop:</b> Walk to classic Chicago attractions like "the Bean" in Millennium Park, the Art Institute of Chicago, and the lakefront. The Loop feels more touristy and there can be fewer food options available at night.
            </ContentBody>
            <ContentBody>
              <b>Streeterville and River North:</b> These two neighborhoods are divided by the Magnificent Mile, which is full of shopping, and a good mix of restaurants and other attractions, including the Riverewalk.
            </ContentBody>
            <ContentBody>
              If you are looking at Airbnbs in more residential areas, friends and family have enjoyed living or staying in Bridgeport (one of the city's most diverse neighborhoods, with a large Chinese population), Pilsen (home to a large Mexican-American population with amazing restaurants and the National Museum of Mexican Art), and Lincoln Park (a peaceful residential area close to many green spaces, the lakefront, and the zoo). However, these areas are further from downtown. We love exploring Chicago's neighborhoods, but we recommend doing research into the safety of each area in which you might stay. Please reach out if you have questions.
            </ContentBody>
          </ContentSubsection>

          <ContentSubsection>
            <ContentSubsectionTitle>How to get to the venue</ContentSubsectionTitle>
            <ContentBody>
              Garfield Park Conservatory is accessible by the Green Line (part of Chicago's public transportation system). However, we do not recommend taking the Green Line late at night or when leaving the wedding. Instead, please plan to carpool or call an Uber/Lyft. We may have a transportation coordinator and/or Uber gift cards available to facilitate ride sharing.
            </ContentBody>
            <ContentBody>
              There is free parking available on-site. There will be a security guard present at the parking lot.
            </ContentBody>
          </ContentSubsection>
        </ContentTextContainer>
        <ContentImageContainer>
          <ContentImageBackground />
          <ContentImageTravel />
        </ContentImageContainer>
      </ContentSection>
    </>
  );
}

export default TravelPage;

