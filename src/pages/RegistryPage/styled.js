import styled, { keyframes } from 'styled-components';
import { accentColor, textColorDark, mobileBreakpoint } from '../../constants';

export const PageContainer = styled.div`
    max-width: 1040px;
    margin: 0 auto;
    padding: 60px 20px;
    font-family: 'Jost', sans-serif;
    color: ${textColorDark};
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;
    margin-bottom: 60px;

    @media (max-width: 1040px) {
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 20px;
    }
`

export const HeaderTextContainer = styled.div`
    flex: 1;
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
`

export const PageTitle = styled.h1`
    color: ${accentColor};
    font-size: 3.5rem;
    font-family: 'Gabarito', sans-serif;
    font-weight: 500;
    line-height: 1.2;
    margin: 0;
    text-align: left;

    @media (max-width: ${mobileBreakpoint}) {
        font-size: 2.2rem;
    }
`

export const PageSubtitle = styled.p`
    font-size: 1.2rem;
    text-align: left;
    margin: 0;
    line-height: 1.6;
`

const shimmer = keyframes`
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;

export const LoadingMessage = styled.div`
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-family: 'Jost', sans-serif;
    color: ${textColorDark};
`;

export const SkeletonItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SkeletonImage = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    background: #f6f7f8;
    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
    background-repeat: no-repeat;
    background-size: 800px 100%; 
    animation-duration: 1.5s;
    animation-fill-mode: forwards; 
    animation-iteration-count: infinite;
    animation-name: ${shimmer};
    animation-timing-function: linear;
`;

export const SkeletonText = styled.div`
    height: ${props => props.height || '20px'};
    width: ${props => props.width || '100%'};
    margin-top: ${props => props.marginTop || '10px'};
    background: #f6f7f8;
    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
    background-repeat: no-repeat;
    background-size: 800px 100%; 
    animation-duration: 1.5s;
    animation-fill-mode: forwards; 
    animation-iteration-count: infinite;
    animation-name: ${shimmer};
    animation-timing-function: linear;
`;

export const CustomPriceBanner = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    margin-bottom: 20px;
    width: 100%;

    @media (max-width: ${mobileBreakpoint}) {
        flex-direction: column;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
`;

export const BannerImageContainer = styled.div`
    width: 30%;
    max-width: 300px;
    min-width: 250px;
    aspect-ratio: 1 / 1;
    overflow: hidden;

    @media (max-width: ${mobileBreakpoint}) {
        width: 100%;
        max-width: none;
    }
`;

export const BannerDetails = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    flex: 1;

    @media (max-width: ${mobileBreakpoint}) {
        padding: 15px;
    }
`;

export const RegistryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 1040px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${mobileBreakpoint}) {
        grid-template-columns: 1fr;
    }
`

export const RegistryItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        
        button {
            background-color: ${accentColor};
            color: white;
        }
    }
`

export const RegistryImageContainer = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
`

export const RegistryImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const RegistryItemDetails = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 1;
`

export const RegistryItemTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
    line-height: 1.4;
    font-family: 'Gabarito', sans-serif;
`

export const RegistryItemStore = styled.p`
    font-size: 0.9rem;
    margin: 0;
    color: #666;
    flex-grow: 1;
`

export const RegistryItemPrice = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin: 10px 0 0 0;
`

export const GiftButton = styled.button`
    margin-top: auto;
    background-color: transparent;
    color: ${accentColor};
    border: 1px solid ${accentColor};
    padding: 10px;
    font-size: 0.9rem;
    font-family: 'Jost', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;

    &:hover {
        background-color: ${accentColor};
        color: white;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

export const SuccessMessage = styled.div`
    text-align: center;
    font-size: 1.5rem;
    margin: 60px 0;
    font-family: 'Jost', sans-serif;
    color: ${accentColor};
    font-weight: 500;
    line-height: 1.6;
    padding: 20px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`
