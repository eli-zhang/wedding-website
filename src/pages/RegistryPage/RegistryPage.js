import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import {
    PageContainer,
    HeaderContainer,
    HeaderTextContainer,
    PageTitle,
    TitleContainer,
    PageSubtitle,
    RegistryGrid,
    RegistryItem,
    RegistryImageContainer,
    RegistryImage,
    RegistryItemDetails,
    RegistryItemTitle,
    RegistryItemStore,
    RegistryItemPrice
} from './styled';
import { fetchRegistryItems } from '../../services/api';
import bridgeImg from '../../images/bridge.jpg';
import holdingHandsImg from '../../images/holding_hands.jpg';
import trainImg from '../../images/train.jpg';
import hotelImg from '../../images/hotel.jpg';

function RegistryPage() {
    const [registryItems, setRegistryItems] = React.useState([
        {
            id: 'placeholder-1',
            title: "Cheese of Month Club",
            store: "Experience Gift",
            price: "$100.00",
            image: bridgeImg
        },
        {
            id: 'placeholder-2',
            title: "Wine Basket",
            store: "West Elm",
            price: "$50.00",
            image: holdingHandsImg
        },
        {
            id: 'placeholder-3',
            title: "Round Trip Plane Tickets",
            store: "Honeymoon Fund",
            price: "$100.00",
            image: trainImg
        },
        {
            id: 'placeholder-4',
            title: "KitchenAid Stand Mixer - Gold",
            store: "Williams-Sonoma",
            price: "$429.99",
            image: hotelImg
        }
    ]);

    React.useEffect(() => {
        let mounted = true;
        const loadItems = async () => {
            const { status, data } = await fetchRegistryItems();
            if (status === 200) {
                if (mounted && data && data.length > 0) {
                    // If API returns successfully, replace items, falling back to local images if Stripe image is missing
                    const resolvedItems = data.map((apiItem, index) => {
                        const fallbackImage = bridgeImg;
                        return {
                            ...apiItem,
                            name: apiItem.name,
                            description: apiItem.description || "Registry Item",
                            image: apiItem.image || fallbackImage,
                            price: apiItem.price
                        };
                    });

                    setRegistryItems(resolvedItems);
                }
            }
        };

        loadItems();
        return () => { mounted = false; };
    }, []);

    return (
        <>
            <NavBar tab={"Registry"} />
            <PageContainer>
                <HeaderContainer>
                    <HeaderTextContainer>
                        <TitleContainer>
                            <PageTitle>Registry</PageTitle>
                        </TitleContainer>
                        <PageSubtitle>
                            Your presence is the greatest gift of all. If you wish to celebrate with a gift, please browse our registry below.
                        </PageSubtitle>
                    </HeaderTextContainer>
                </HeaderContainer>

                <RegistryGrid>
                    {registryItems.map(item => (
                        <RegistryItem key={item.id}>
                            <RegistryImageContainer>
                                <RegistryImage src={item.image} alt={item.name} />
                            </RegistryImageContainer>
                            <RegistryItemDetails>
                                <RegistryItemTitle>{item.name}</RegistryItemTitle>
                                <RegistryItemStore>{item.description}</RegistryItemStore>
                                <RegistryItemPrice>{item.price}</RegistryItemPrice>
                            </RegistryItemDetails>
                        </RegistryItem>
                    ))}
                </RegistryGrid>
            </PageContainer>
        </>
    );
}

export default RegistryPage;
