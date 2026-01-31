import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import chicagoDoodle from '../../images/chicago_doodle.png';
import hotelImage from '../../images/hotel.jpg';
import {
    PageContainer,
    HeaderContainer,
    HeaderTextContainer,
    PageTitle,
    TitleImage,
    TitleContainer,
    InlineTitleImage,
    PageSubtitle,
    HotelSection,
    HotelBlockHeader,
    HotelName,
    AddressInfo,
    ContentBlock,
    ContentHeader,
    ContentList,
    ContentItem,
    BookButton,
    ContactText,
    HotelImageContainer,
    HotelImage
} from './styled';

function HotelsPage() {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = hotelImage;
        img.onload = () => setIsImageLoaded(true);
        if (img.complete) setIsImageLoaded(true);
    }, []);

    return (
        <>
            <NavBar tab={"Hotels"} />
            <PageContainer>
                <HeaderContainer>
                    <HeaderTextContainer>
                        <TitleContainer>
                            <PageTitle>Lodging</PageTitle>
                            <InlineTitleImage src={chicagoDoodle} alt="Chicago Doodle" />
                        </TitleContainer>
                        <PageSubtitle>
                            We have reserved a block of rooms for our guests at the Hampton Inn.
                        </PageSubtitle>
                    </HeaderTextContainer>
                    <TitleImage src={chicagoDoodle} alt="Chicago Doodle" />
                </HeaderContainer>

                <HotelImageContainer>
                    <HotelImage src={hotelImage} $isLoaded={isImageLoaded} />
                </HotelImageContainer>

                <HotelSection>
                    <HotelBlockHeader>HOTEL BLOCK</HotelBlockHeader>
                    <HotelName>Hampton Inn Chicago Downtown/Magnificent Mile</HotelName>
                    <AddressInfo>
                        160 E. Huron St.<br />
                        Chicago, Illinois 60611
                    </AddressInfo>

                    <ContentBlock>
                        <ContentHeader>Check in</ContentHeader>
                        <ContentList>
                            <ContentItem>Saturday, May 16 at 4 pm</ContentItem>
                            <ContentItem>OR</ContentItem>
                            <ContentItem>Sunday, May 17 at 4 pm</ContentItem>
                        </ContentList>
                    </ContentBlock>

                    <ContentBlock>
                        <ContentHeader>Check out</ContentHeader>
                        <ContentList>
                            <ContentItem>Monday, May 18 at 11 am</ContentItem>
                        </ContentList>
                    </ContentBlock>

                    <ContentBlock>
                        <ContentHeader>Discounted rates</ContentHeader>
                        <ContentList>
                            <ContentItem>1 king bed - $229/night</ContentItem>
                            <ContentItem>2 queen beds - $229/night</ContentItem>
                        </ContentList>
                    </ContentBlock>

                    <ContentBlock>
                        <ContentHeader>Last day to reserve</ContentHeader>
                        <ContentList>
                            <ContentItem>April 16, 2026</ContentItem>
                        </ContentList>
                    </ContentBlock>

                    <ContentBlock>
                        <ContentHeader>Amenities</ContentHeader>
                        <ContentList>
                            <ContentItem>Free hot breakfast</ContentItem>
                            <ContentItem>Fitness center</ContentItem>
                            <ContentItem>Cribs available</ContentItem>
                            <ContentItem>Parking (valet only) for $72/night. SpotHero is another option for finding parking downtown.</ContentItem>
                        </ContentList>
                    </ContentBlock>

                    <BookButton
                        href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=CHIDMHX&groupCode=CHHFEM&arrivaldate=2026-05-16&departuredate=2026-05-18&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book here
                    </BookButton>

                    <ContactText>
                        If you run into issues when booking, please reach out to us!
                    </ContactText>
                </HotelSection>
            </PageContainer>
        </>
    );
}

export default HotelsPage;
