import NavBar from '../../components/NavBar/NavBar';
import {
  ContentSection, ContentTextContainer, ContentTitle, ContentBody,
  ContentSubsection, ContentSubsectionTitle, BridgeImageContainer, BridgeImage
} from './styled';

function TransportationPage() {
  return (
    <>
      <NavBar tab={"Transportation"} />
      <ContentSection>
        <ContentTextContainer>
          <ContentTitle>Transportation</ContentTitle>
          <ContentSubsection>
            <ContentSubsectionTitle>How to get to the venue</ContentSubsectionTitle>
            <ContentBody>
              Although Garfield Park Conservatory is accessible by the Green Line (part of Chicago's public transportation system), we do <b>not</b> recommend taking the Green Line late at night or when leaving the wedding. Instead, please plan to carpool or call an Uber/Lyft. We may have a transportation coordinator and/or Uber gift cards available to facilitate ride sharing.
            </ContentBody>
            <ContentBody>
              There is free parking available on-site. There will be a security guard present at the parking lot.
            </ContentBody>
          </ContentSubsection>
        </ContentTextContainer>
      </ContentSection>
      <BridgeImageContainer>
        <BridgeImage />
      </BridgeImageContainer>
    </>
  );
}

export default TransportationPage;

