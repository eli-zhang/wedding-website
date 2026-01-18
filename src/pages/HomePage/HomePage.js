
import { useState, useEffect, useRef } from 'react';
import {
  BackgroundHeaderContainer, HeaderBackgroundRect, LargeHomeImage, BlueberryImage, WelcomeMessage,
  TaglineContainer, TaglineText, TaglineSubtitle, TaglineSubtitleDate, TaglineSubtitleLocation, TaglineSubtitleContainer, TaglineButtonContainer,
  TaglineDateLeft, TaglineDateCenter, TaglineDateRight,
  SectionSpacer, RotatedSideText, EmptyButton, RingDoodleIcon,
  ContentSection, ContentSectionReversed, ContentTextContainer, ContentTitle, ContentBody, ContentImageContainer, ContentImage, ContentImageBackground, ContentImageBackgroundLeft,
  ContentImageTravel, ContentImageSchedule, ContentImageThingsToDo, Ampersand,
  SaveTheDateContainer, SaveTheDateHeader, SaveTheDateTitle, SaveTheDateSubtext, SaveTheDateDetails, DetailColumn, DetailLabel, DetailValue, DetailSubValue,
  TopThingsList, TopThingsItem
} from './styled';
import { Link } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar'
import FadeInWrapper from '../../components/FadeInWrapper/FadeInWrapper';
import ringDoodle from '../../images/ring_doodle.png';

function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const saveTheDateRef = useRef(null);
  const [isSaveTheDateVisible, setIsSaveTheDateVisible] = useState(false);

  useEffect(() => {
    document.title = "Francesca & Eli's Wedding Website"

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSaveTheDateVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    if (saveTheDateRef.current) {
      observer.observe(saveTheDateRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const parallaxOffset = scrollY * 0.7;

  return (
    <div className="App">
      <NavBar tab={"Home"} />
      <RotatedSideText>MAY 17, 2026</RotatedSideText>

      <BackgroundHeaderContainer>
        <LargeHomeImage style={{ transform: `translateY(${parallaxOffset}px)` }} />
        <TaglineContainer>
          <TaglineSubtitleContainer>
            <RingDoodleIcon src={ringDoodle} />
            <TaglineSubtitle>THE WEDDING DAY OF</TaglineSubtitle>
            <TaglineText>
              <div>FRANCESCA</div>
              <Ampersand>&</Ampersand>
              <div>ELI</div>
            </TaglineText>
          </TaglineSubtitleContainer>
          <TaglineButtonContainer>
            <Link to="/rsvp" style={{ textDecoration: 'none' }}><EmptyButton>RSVP Here</EmptyButton></Link>
          </TaglineButtonContainer>
        </TaglineContainer>
      </BackgroundHeaderContainer>

      <SaveTheDateContainer ref={saveTheDateRef} $isVisible={isSaveTheDateVisible}>
        <SaveTheDateHeader>
          <SaveTheDateTitle>See you soon!</SaveTheDateTitle>
          <SaveTheDateSubtext>We're excited to see you in Chicago. Here's the important info for the wedding day:</SaveTheDateSubtext>
        </SaveTheDateHeader>
        <SaveTheDateDetails>
          <DetailColumn>
            <DetailLabel>Date</DetailLabel>
            <DetailValue>05.17.2026</DetailValue>
          </DetailColumn>
          <DetailColumn>
            <DetailLabel>Time</DetailLabel>
            <DetailValue>17:30</DetailValue>
          </DetailColumn>
          <DetailColumn>
            <DetailLabel>Location</DetailLabel>
            <DetailValue>Garfield Park Conservatory</DetailValue>
            <DetailSubValue>300 N Central Park Ave<br />Chicago, IL 60624</DetailSubValue>
          </DetailColumn>
        </SaveTheDateDetails>
      </SaveTheDateContainer>

      <FadeInWrapper>
        <WelcomeMessage>
          In 1837, the city of Chicago adopted the motto Urbs in Horto, or "City in a Garden."
          Though Chicago is now a city of glittering skyscrapers and vibrant neighborhoods, it is still filled with beautiful green spaces, from the lakefront trail to over 600 parks.
          We're excited to invite you to Chicago and our wedding at <b>Garfield Park Conservatory</b>, one of Chicago's public parks, where you can experience a garden in the city that we love.
        </WelcomeMessage>
      </FadeInWrapper>

      <SectionSpacer />

      <BlueberryImage />

      {/* <FadeInWrapper>
        <ContentSection>
          <ContentTextContainer>
            <ContentTitle>Where to go</ContentTitle>
            <ContentBody>
              In 1837, the city of Chicago adopted the motto Urbs in Horto, or “City in a Garden.”
              Though Chicago is now a city of glittering skyscrapers and vibrant neighborhoods, it is still filled with beautiful green spaces, from the lakefront trail to over 600 parks.
              We're excited to invite you to Chicago and our wedding at <b>Garfield Park Conservatory</b>, one of Chicago's public parks, where you can experience a garden in the city that we love.
            </ContentBody>

            <ContentBody><i>
              Please review our travel section below for more info on how to get to the venue.
            </i></ContentBody>

            <TaglineButtonContainer>
              <a href="https://www.google.com/maps/dir//300+N+Central+Park+Ave,+Chicago,+IL+60624/@41.8857241,-87.6482463,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880e32b7f3180569:0xd2217483684883aa!2m2!1d-87.7172554!2d41.8862729?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><EmptyButton>Open in Maps</EmptyButton></a>
            </TaglineButtonContainer>
          </ContentTextContainer>



          <ContentImageContainer>
            <ContentImageBackground />
            <ContentImage />
          </ContentImageContainer>
        </ContentSection>
      </FadeInWrapper>

      <SectionSpacer />

      <FadeInWrapper>
        <ContentSectionReversed>
          <ContentTextContainer>
            <ContentTitle>Travel</ContentTitle>
            <ContentBody>
              Garfield Park Conservatory is accessible by the Green Line (part of Chicago’s public transportation system). However, we do not recommend taking the Green Line late at night or when leaving the wedding. Instead, please plan to carpool or call an Uber/Lyft. We may have a transportation coordinator and/or Uber gift cards available to facilitate ride sharing. There is free parking available on-site. There will be a security guard present at the parking lot.
            </ContentBody>
          </ContentTextContainer>
          <ContentImageContainer>
            <ContentImageBackgroundLeft />
            <ContentImageTravel />
          </ContentImageContainer>
        </ContentSectionReversed>
      </FadeInWrapper>

      <SectionSpacer />

      <FadeInWrapper>
        <ContentSection>
          <ContentTextContainer>
            <ContentTitle>Schedule</ContentTitle>
            <ContentBody>
              The ceremony will begin at <b>5:00 PM</b> at Garfield Park Conservatory.
            </ContentBody>
          </ContentTextContainer>
          <ContentImageContainer>
            <ContentImageBackground />
            <ContentImageSchedule />
          </ContentImageContainer>
        </ContentSection>
      </FadeInWrapper>

      <SectionSpacer />

      <FadeInWrapper>
        <ContentSectionReversed>
          <ContentTextContainer>
            <ContentTitle>Things to Do</ContentTitle>
            <ContentBody>
              Top things to do:
            </ContentBody>
            <TopThingsList>
              <TopThingsItem>Visit the red pandas in the Lincoln Park zoo</TopThingsItem>
              <TopThingsItem>Visit the Art Institute of Chicago</TopThingsItem>
              <TopThingsItem>See the tiny replica model of Chicago to Seattle in the Museum of Science and Industry</TopThingsItem>
              <TopThingsItem>Visit Chinatown and eat a lot of yummy food</TopThingsItem>
              <TopThingsItem>See the Bean (it's actually quite cool) in Millennium Park</TopThingsItem>
              <TopThingsItem>Eat deep dish pizza if you haven't already (most people like Lou Malnati's more than Giordano's but we like Giordano's more)</TopThingsItem>
              <TopThingsItem>Go biking along the Lakefront Trail</TopThingsItem>
            </TopThingsList>
          </ContentTextContainer>
          <ContentImageContainer>
            <ContentImageBackgroundLeft />
            <ContentImageThingsToDo />
          </ContentImageContainer>
        </ContentSectionReversed>
      </FadeInWrapper> */}

    </div>

  );
}

export default HomePage;