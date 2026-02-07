import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { FAQContainer, FAQTitle, FAQList, FAQItem, FAQQuestion, FAQAnswer, ToggleIcon } from './styled';

function FAQPage() {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(i => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  const faqData = [
    {
      question: "What is the dress code?",
      answer: (
        <>
          We recommend cocktail or "garden party chic" attire. The greenhouse can be warm, but we may also have an outdoor cocktail hour and Chicago weather can be unpredictable in May. We want you to wear whatever makes you comfortable, but if you want outfit ideas, we suggest the following:
          <ul>
            <li>A light-colored dress shirt, slacks, and a blazer.</li>
            <li>A dress (any length is fine) or jumpsuit—think pastels or florals, if you have them.</li>
          </ul>
        </>
      )
    },
    {
      question: "Will the wedding be indoors or outdoors?",
      answer: "TBD—but depending on weather, we may have an outdoor cocktail hour followed by an indoor reception."
    },
    {
      question: "How can I get to and from the venue? Is parking available?",
      answer: (
        <>
          Please see our transportation guide <Link to="/transportation">linked here</Link>.
        </>
      )
    },
    {
      question: "What is the RSVP deadline?",
      answer: "Please get back to us by April 5!"
    },
    {
      question: "Will there be a rehearsal dinner?",
      answer: "We might have an informal rehearsal dinner the night before the wedding. Check back for more details!"
    },
    {
      question: "Are young children invited?",
      answer: "Yes, please feel free to bring your child if that works best for your family. We love kids and since one of us is a future pediatrician, it would feel only right to have kids at our wedding!"
    },
    {
      question: "Can I bring a plus one?",
      answer: "Plus ones will be indicated on your invitation envelope (and when you RSVP) as space is unfortunately limited. Thank you very much for your understanding!"
    },
    {
      question: "Is there a registry?",
      answer: "Your presence at our wedding and in our life is already the best gift we can imagine, and we know that many of you will have traveled a long distance to get to Chicago or are still students. However, if you do want to give a gift, we appreciate it and we are working on setting up a registry and/or honeymoon fund."
    },
    {
      question: "Can I arrive early to the wedding?",
      answer: "We recommend arriving after 5 pm but before the ceremony start time of 5:30. If you need to arrive earlier, the conservatory will be open to the general public. If you arrive prior to 5 pm, there is a $10 admission fee for non-Chicago residents. You won't have to pay anything if you arrive after 5 pm!"
    },
    {
      question: "What food will be served at the reception? What if I have dietary restrictions?",
      answer: "We'll be serving Indian food provided by Mantra Catering. When you RSVP, please indicate any dietary restrictions. We will do our best to accommodate them and will be in touch with you if we have questions."
    },
    {
      question: "What is the schedule for the wedding day?",
      answer: "Aside from starting between 5 pm and 5:30 pm, the schedule is TBD! Please check back for more details."
    }
  ];

  return (
    <>
      <NavBar tab={"FAQ"} />
      <FAQContainer>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQList>
          {faqData.map((item, index) => (
            <FAQItem key={index}>
              <FAQQuestion onClick={() => toggleSection(index)}>
                {item.question}
                <ToggleIcon isOpen={openSections.includes(index)}>+</ToggleIcon>
              </FAQQuestion>
              <FAQAnswer isOpen={openSections.includes(index)}>
                {item.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContainer>
    </>
  );
}

export default FAQPage;

