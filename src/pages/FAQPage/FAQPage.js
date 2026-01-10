import NavBar from '../../components/NavBar/NavBar';
import { FAQContainer, FAQTitle, FAQList, FAQItem, FAQQuestion, FAQAnswer } from './styled';

function FAQPage() {
  return (
    <>
      <NavBar tab={"FAQ"} />
      <FAQContainer>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQList>
          <FAQItem>
            <FAQQuestion>What is the dress code?</FAQQuestion>
            <FAQAnswer>
              We recommend semi-formal or "garden party chic" attire. Please keep in mind that the greenhouse can be warm, so feel free to dress comfortably and forgo a suit jacket. We may also have a brief outdoor ceremony (weather permitting). We want you to wear whatever makes you comfortable, but if you want outfit ideas, we suggest the following:
              <ul>
                <li>A light-colored dress shirt and slacks, tie and suit jacket optional.</li>
                <li>A dress or jumpsuit—think pastels or florals, if you have them.</li>
              </ul>
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Will the wedding be indoors or outdoors?</FAQQuestion>
            <FAQAnswer>
              TBD—but depending on weather, we may have an outdoor ceremony followed by an indoor reception.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>How can I get to and from the venue? Is parking available?</FAQQuestion>
            <FAQAnswer>
              Please see our transportation guide linked here.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>What is the RSVP deadline?</FAQQuestion>
            <FAQAnswer>
              TBD!
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Are young children invited?</FAQQuestion>
            <FAQAnswer>
              Yes, please feel free to bring your child if that works best for your family.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Can I bring a plus one?</FAQQuestion>
            <FAQAnswer>
              TBD!
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Is there a registry?</FAQQuestion>
            <FAQAnswer>
              We don't have a registry yet!
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Can I arrive early to the wedding?</FAQQuestion>
            <FAQAnswer>
              TBD!
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>What food will be served? What if I have dietary restrictions?</FAQQuestion>
            <FAQAnswer>
              Yes!
            </FAQAnswer>
          </FAQItem>
        </FAQList>
      </FAQContainer>
    </>
  );
}

export default FAQPage;

