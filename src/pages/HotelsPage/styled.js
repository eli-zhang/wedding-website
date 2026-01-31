import styled, { keyframes } from 'styled-components';
import { accentColor, textColorDark, mobileBreakpoint } from '../../constants';

const swipeRight = keyframes`
    from {
        clip-path: inset(0 100% 0 0);
    }
    to {
        clip-path: inset(0 0 0 0);
    }
`;

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

    @media (max-width: 768px) {
        font-size: 2.8rem;
    }
`

export const InlineTitleImage = styled.img`
    height: 50px;
    width: auto;
    display: none;

    @media (max-width: 1041px) {
        display: block;
    }
`

export const TitleImage = styled.img`
    height: 100px;
    width: auto;
    object-fit: contain;

    @media (max-width: 1041px) {
        display: none;
    }

    @media (max-width: 768px) {
        height: 60px;
    }
`

export const PageSubtitle = styled.p`
    font-size: 1.2rem;
    text-align: left;
    margin: 0;
    line-height: 1.6;
`

export const HotelSection = styled.div`
    margin-top: 40px;
`

export const HotelBlockHeader = styled.h2`
    font-size: 1.8rem;
    font-weight: 500;
    margin: 0 0 20px 0;
    color: ${accentColor};
    font-family: 'Gabarito', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
`

export const HotelName = styled.h3`
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0 0 10px 0;
    line-height: 1.4;
`

export const AddressInfo = styled.div`
    font-size: 1.1rem;
    margin-bottom: 30px;
    line-height: 1.6;
    opacity: 0.9;
`

export const ContentBlock = styled.div`
    margin-bottom: 30px;
`

export const ContentHeader = styled.h4`
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.8;
`

export const ContentList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export const ContentItem = styled.li`
    margin-bottom: 10px;
    line-height: 1.6;
    font-size: 1.05rem;

    strong {
        font-weight: 500;
    }
`

export const BookButton = styled.a`
    display: inline-block;
    background-color: ${accentColor};
    color: white;
    padding: 12px 30px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    margin-top: 20px;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
    }
`

export const ContactText = styled.p`
    margin-top: 40px;
    font-style: italic;
    opacity: 0.8;
`

export const HotelImageContainer = styled.div`
    width: 100%;
    height: 500px;
    margin: 40px 0 60px;
    overflow: hidden;

    @media (max-width: ${mobileBreakpoint}) {
        height: 300px;
        margin: 20px 0 40px;
    }
`

export const HotelImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    will-change: clip-path;
    clip-path: inset(0 100% 0 0);
    animation: ${props => props.$isLoaded ? swipeRight : 'none'} 1.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
`
