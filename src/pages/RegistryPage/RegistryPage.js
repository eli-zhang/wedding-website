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
    RegistryItemPrice,
    GiftButton
} from './styled';
import { fetchRegistryItems, createCheckoutSession } from '../../services/api';
import bridgeImg from '../../images/bridge.jpg';
import holdingHandsImg from '../../images/holding_hands.jpg';
import trainImg from '../../images/train.jpg';
import hotelImg from '../../images/hotel.jpg';

function RegistryPage() {
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [registryItems, setRegistryItems] = React.useState([
        {
            id: 'placeholder-1',
            name: "Placeholder gift",
            description: "Placeholder description",
            price: "$100.00",
            price_id: null,
            image: bridgeImg
        },
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
                            price: apiItem.price,
                            price_id: apiItem.price_id
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
                        <RegistryItem key={item.id} onClick={(e) => {
                            // If user clicks the wrapping item but the item handles it inside the button...
                            // it's fine, we will just delegate it via the explicit button below to keep it organized
                        }}>
                            <RegistryImageContainer>
                                <RegistryImage src={item.image} alt={item.name} />
                            </RegistryImageContainer>
                            <RegistryItemDetails>
                                <RegistryItemTitle>{item.name}</RegistryItemTitle>
                                <RegistryItemStore>{item.description}</RegistryItemStore>
                                <RegistryItemPrice>{item.price}</RegistryItemPrice>
                                {item.price_id && (
                                    <GiftButton
                                        disabled={isProcessing}
                                        onClick={async (e) => {
                                            e.stopPropagation();
                                            setIsProcessing(true);
                                            const successUrl = `${window.location.origin}/registry?success=true`;
                                            const cancelUrl = `${window.location.origin}/registry?canceled=true`;
                                            const url = await createCheckoutSession(item.price_id, successUrl, cancelUrl);
                                            if (url) {
                                                window.location.href = url;
                                            } else {
                                                alert("Unable to initiate checkout. Please try again later.");
                                                setIsProcessing(false);
                                            }
                                        }}
                                    >
                                        {isProcessing ? "Processing..." : "Gift This"}
                                    </GiftButton>
                                )}
                            </RegistryItemDetails>
                        </RegistryItem>
                    ))}
                </RegistryGrid>
            </PageContainer>
        </>
    );
}

export default RegistryPage;
