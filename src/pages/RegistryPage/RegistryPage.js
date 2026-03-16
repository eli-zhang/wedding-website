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
    GiftButton,
    LoadingMessage,
    SkeletonItem,
    SkeletonImage,
    SkeletonText,
    CustomPriceBanner,
    BannerImageContainer,
    BannerDetails
} from './styled';
import { fetchRegistryItems, createCheckoutSession } from '../../services/api';
import bridgeImg from '../../images/bridge.jpg';
import holdingHandsImg from '../../images/holding_hands.jpg';
import trainImg from '../../images/train.jpg';
import hotelImg from '../../images/hotel.jpg';

function RegistryPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [processingItemId, setProcessingItemId] = React.useState(null);
    const [registryItems, setRegistryItems] = React.useState([]);

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
            if (mounted) {
                setIsLoading(false);
            }
        };

        loadItems();
        return () => { mounted = false; };
    }, []);

    const handleGiftClick = async (e, item) => {
        e.stopPropagation();
        if (!item.price_id || processingItemId !== null) return;
        
        setProcessingItemId(item.id);
        const successUrl = `${window.location.origin}/registry?success=true`;
        const cancelUrl = `${window.location.origin}/registry?canceled=true`;
        const url = await createCheckoutSession(item.price_id, successUrl, cancelUrl);
        if (url) {
            window.location.href = url;
        } else {
            alert("Unable to initiate checkout. Please try again later.");
            setProcessingItemId(null);
        }
    };

    const customPriceItems = registryItems.filter(item => item.price === 'Custom price');
    const regularItems = registryItems.filter(item => item.price !== 'Custom price');

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

                {isLoading ? (
                    <>
                        <LoadingMessage>Loading registry items...</LoadingMessage>
                        <RegistryGrid>
                            {[...Array(8)].map((_, i) => (
                                <SkeletonItem key={i}>
                                    <SkeletonImage />
                                    <RegistryItemDetails>
                                        <SkeletonText height={"24px"} width={"80%"} />
                                        <SkeletonText height={"16px"} width={"100%"} />
                                        <SkeletonText height={"16px"} width={"60%"} />
                                        <SkeletonText height={"36px"} width={"100%"} marginTop={"auto"} />
                                    </RegistryItemDetails>
                                </SkeletonItem>
                            ))}
                        </RegistryGrid>
                    </>
                ) : (
                    <>
                        {customPriceItems.map(item => (
                            <CustomPriceBanner key={item.id} onClick={(e) => handleGiftClick(e, item)}>
                                <BannerImageContainer>
                                    <RegistryImage src={item.image} alt={item.name} />
                                </BannerImageContainer>
                                <BannerDetails>
                                    <RegistryItemTitle>{item.name}</RegistryItemTitle>
                                    <RegistryItemStore>{item.description}</RegistryItemStore>
                                    <RegistryItemPrice>{item.price}</RegistryItemPrice>
                                    {item.price_id && (
                                        <GiftButton 
                                            disabled={processingItemId !== null}
                                            onClick={(e) => handleGiftClick(e, item)}
                                        >
                                            {processingItemId === item.id ? "Processing..." : "Gift This"}
                                        </GiftButton>
                                    )}
                                </BannerDetails>
                            </CustomPriceBanner>
                        ))}
                        
                        <RegistryGrid>
                            {regularItems.map(item => (
                                <RegistryItem key={item.id} onClick={(e) => handleGiftClick(e, item)}>
                                    <RegistryImageContainer>
                                        <RegistryImage src={item.image} alt={item.name} />
                                    </RegistryImageContainer>
                                    <RegistryItemDetails>
                                        <RegistryItemTitle>{item.name}</RegistryItemTitle>
                                        <RegistryItemStore>{item.description}</RegistryItemStore>
                                        <RegistryItemPrice>{item.price}</RegistryItemPrice>
                                        {item.price_id && (
                                            <GiftButton 
                                                disabled={processingItemId !== null}
                                                onClick={(e) => handleGiftClick(e, item)}
                                            >
                                                {processingItemId === item.id ? "Processing..." : "Gift This"}
                                            </GiftButton>
                                        )}
                                    </RegistryItemDetails>
                                </RegistryItem>
                            ))}
                        </RegistryGrid>
                    </>
                )}
            </PageContainer>
        </>
    );
}

export default RegistryPage;
