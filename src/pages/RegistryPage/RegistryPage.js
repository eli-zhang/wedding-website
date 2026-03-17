import React from 'react';
import { useLocation } from 'react-router-dom';
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
    BannerDetails,
    SuccessMessage,
    ControlsContainer,
    SortContainer,
    SortLabel,
    SortSelect,
    PaginationContainer,
    PageButton
} from './styled';
import { fetchRegistryItems, createCheckoutSession } from '../../services/api';
import notFoundImage from '../../images/image_not_found.jpg';

function RegistryPage() {
    const location = useLocation();
    const isSuccess = new URLSearchParams(location.search).get('success') === 'true';

    const [isLoading, setIsLoading] = React.useState(true);
    const [processingItemId, setProcessingItemId] = React.useState(null);
    const [registryItems, setRegistryItems] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sortOption, setSortOption] = React.useState('name');
    const itemsPerPage = 8; // Match the skeleton count for consistency

    React.useEffect(() => {
        let mounted = true;
        const loadItems = async () => {
            const { status, data } = await fetchRegistryItems();
            if (status === 200) {
                if (mounted && data && data.length > 0) {
                    // If API returns successfully, replace items, falling back to local images if Stripe image is missing
                    const resolvedItems = data.map((apiItem, index) => {
                        const fallbackImage = notFoundImage;
                        return {
                            ...apiItem,
                            name: apiItem.name,
                            description: apiItem.description || "Registry Item",
                            image: apiItem.image || fallbackImage,
                            price: apiItem.price,
                            price_id: apiItem.price_id,
                            silliness: apiItem.silliness
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

    const parsePrice = (priceStr) => {
        if (!priceStr || priceStr === 'Custom price' || priceStr === 'Price unavailable') return 0;
        return parseFloat(priceStr.replace(/[$,]/g, '')) || 0;
    };

    // Process registry items: filter out custom price items for grid, then sort
    const allRegularItems = registryItems.filter(item => item.price !== 'Custom price');
    const customPriceItems = registryItems.filter(item => item.price === 'Custom price');

    const sortedItems = [...allRegularItems].sort((a, b) => {
        switch (sortOption) {
            case 'price_low':
                return parsePrice(a.price) - parsePrice(b.price);
            case 'price_high':
                return parsePrice(b.price) - parsePrice(a.price);
            case 'silliness':
                return (b.silliness || 0) - (a.silliness || 0);
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });

    // Pagination logic
    const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 500, behavior: 'smooth' });
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        setCurrentPage(1); // Reset to first page on sort
    };

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
                            Thank you for viewing our newlywed fund! Your presence at our wedding and in our life is already the best gift we can imagine, and we know that many of you will have traveled a long distance to get to Chicago or are still students. However, if you do want to give a gift, we really appreciate your generosity and have listed some options below. We'll purchase any gifted items after we move for residency. Feel free to make partial contributions towards a group gift if you want!
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
                ) : isSuccess ? (
                    <SuccessMessage>
                        Thank you so much for contributing to our registry! We're really grateful for your generosity and support.
                    </SuccessMessage>
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

                        <ControlsContainer>
                            <SortContainer>
                                <SortLabel>Sort by:</SortLabel>
                                <SortSelect value={sortOption} onChange={handleSortChange}>
                                    <option value="name">Name (A-Z)</option>
                                    <option value="price_low">Price: Low to High</option>
                                    <option value="price_high">Price: High to Low</option>
                                    <option value="silliness">Silliness</option>
                                </SortSelect>
                            </SortContainer>

                            {totalPages > 1 && (
                                <PaginationContainer>
                                    <PageButton
                                        disabled={currentPage === 1}
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    >
                                        &laquo; Prev
                                    </PageButton>
                                    {[...Array(totalPages)].map((_, i) => (
                                        <PageButton
                                            key={i + 1}
                                            active={currentPage === i + 1}
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </PageButton>
                                    ))}
                                    <PageButton
                                        disabled={currentPage === totalPages}
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >
                                        Next &raquo;
                                    </PageButton>
                                </PaginationContainer>
                            )}
                        </ControlsContainer>

                        <RegistryGrid>
                            {currentItems.map(item => (
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

                        {totalPages > 1 && (
                            <PaginationContainer>
                                <PageButton
                                    disabled={currentPage === 1}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                >
                                    &laquo; Prev
                                </PageButton>
                                {[...Array(totalPages)].map((_, i) => (
                                    <PageButton
                                        key={i + 1}
                                        active={currentPage === i + 1}
                                        onClick={() => handlePageChange(i + 1)}
                                    >
                                        {i + 1}
                                    </PageButton>
                                ))}
                                <PageButton
                                    disabled={currentPage === totalPages}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                >
                                    Next &raquo;
                                </PageButton>
                            </PaginationContainer>
                        )}
                    </>
                )}
            </PageContainer>
        </>
    );
}

export default RegistryPage;
