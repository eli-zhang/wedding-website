import styled from 'styled-components';
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

export const RegistryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 40px;

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
`

export const RegistryItemPrice = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin: 10px 0 0 0;
`
