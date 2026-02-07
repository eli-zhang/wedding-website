import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import hotelImage from '../../images/hotel.jpg';
import {
    PageContainer,
    HeaderContainer,
    HeaderTextContainer,
    PageTitle,
    TitleContainer,
    PageSubtitle,
    HotelSection,
    HotelBlockHeader,
    HotelName,
    AddressInfo,
    ContentBlock,
    ContentHeader,
    HotelTable,
    TableRow,
    TableLabel,
    TableContent,
    BookButton,
    ContactText,
    HotelImageContainer,
    HotelImage,
    OtherOptionsSection,
    NeighborhoodList,
    NeighborhoodItem,
    NeighborhoodName
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
                        </TitleContainer>
                        <PageSubtitle>
                            We have reserved a block of rooms for our guests at the Hampton Inn.
                        </PageSubtitle>
                    </HeaderTextContainer>
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

                    <HotelTable>
                        <TableRow>
                            <TableLabel>Check in</TableLabel>
                            <TableContent>
                                Saturday, May 16 at 4 pm<br />
                                <i>or</i><br />
                                Sunday, May 17 at 4 pm
                            </TableContent>
                        </TableRow>

                        <TableRow>
                            <TableLabel>Check out</TableLabel>
                            <TableContent>
                                Monday, May 18 at 11 am
                            </TableContent>
                        </TableRow>

                        <TableRow>
                            <TableLabel>Discounted rates</TableLabel>
                            <TableContent>
                                1 king bed - $229/night<br />
                                2 queen beds - $229/night
                            </TableContent>
                        </TableRow>

                        <TableRow>
                            <TableLabel>Last day to reserve</TableLabel>
                            <TableContent>
                                April 16, 2026
                            </TableContent>
                        </TableRow>

                        <TableRow>
                            <TableLabel>Amenities</TableLabel>
                            <TableContent>
                                Free hot breakfast<br />
                                Fitness center<br />
                                Cribs available<br />
                                Parking (valet only) for $72/night. SpotHero is another option for finding parking downtown.
                            </TableContent>
                        </TableRow>
                    </HotelTable>

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

                    <OtherOptionsSection>
                        <HotelBlockHeader>OTHER OPTIONS</HotelBlockHeader>
                        <AddressInfo>
                            A restaurant industry convention is happening in Chicago during the weekend of our wedding, making hotel prices very high. If possible, book your accommodations soon.
                        </AddressInfo>

                        <ContentBlock>
                            <AddressInfo style={{ marginBottom: '20px' }}>
                                If you are interested in finding accommodations on your own: Rather than staying in the immediate vicinity of Garfield Park Conservatory, we recommend the following neighborhoods to prioritize safety and proximity to “downtown” tourist attractions:
                            </AddressInfo>
                            <NeighborhoodList>
                                <NeighborhoodItem>
                                    <NeighborhoodName>West Loop/Fulton Market: </NeighborhoodName>
                                    This is the neighborhood where we live. It is relatively close to the wedding venue and is full of the trendiest restaurants and bars, though they can be expensive.
                                </NeighborhoodItem>
                                <NeighborhoodItem>
                                    <NeighborhoodName>The Loop: </NeighborhoodName>
                                    Walk to classic Chicago attractions like “the Bean” in Millennium Park, the Art Institute of Chicago, and the lakefront. The Loop feels more touristy and there can be fewer food options available at night.
                                </NeighborhoodItem>
                                <NeighborhoodItem>
                                    <NeighborhoodName>Streeterville and River North: </NeighborhoodName>
                                    These two neighborhoods are divided by the Magnificent Mile, which is full of shopping, and a good mix of restaurants and other attractions, including the Riverwalk.
                                </NeighborhoodItem>
                            </NeighborhoodList>
                        </ContentBlock>

                        <ContentBlock>
                            <ContentHeader>Airbnbs and Residential Areas</ContentHeader>
                            <AddressInfo style={{ marginBottom: '20px' }}>
                                If you are looking at Airbnbs in more residential areas (not a bad option considering the high hotel prices!), friends and family have enjoyed living or staying in Bridgeport (one of the city’s most diverse neighborhoods, with a large Chinese population) and Pilsen (home to a large Mexican-American population with amazing restaurants and the National Museum of Mexican Art). Lincoln Park is a peaceful residential area close to many green spaces, the lakefront, and the zoo, and West Town and Wicker Park are trendy areas with fun vintage stores and ample food options. However, all of these areas are further from downtown. We love exploring Chicago’s neighborhoods, but <b>please do research into the safety of each area where you’re considering staying</b>. Please reach out if you have questions—we’d love to help!
                            </AddressInfo>
                        </ContentBlock>
                    </OtherOptionsSection>
                </HotelSection>
            </PageContainer>
        </>
    );
}

export default HotelsPage;
