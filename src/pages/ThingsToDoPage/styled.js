import styled from 'styled-components';
import { accentColor, textColorDark } from '../../constants';

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

export const NeighborhoodSection = styled.div`
    border-bottom: 1px solid rgba(77, 90, 109, 0.1);
`

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.7;
    }
`

export const NeighborhoodName = styled.h2`
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    line-height: 1.4;

    span {
        font-size: 1.1rem;
        font-weight: 300;
        opacity: 0.8;
    }
`

export const ToggleIcon = styled.span`
    font-size: 1.5rem;
    font-weight: 300;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
`

export const SectionContent = styled.div`
    max-height: ${props => props.isOpen ? '2000px' : '0'};
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${props => props.isOpen ? '1' : '0'};
    padding-bottom: ${props => props.isOpen ? '40px' : '0'};
`

export const ContentBlock = styled.div`
    margin-bottom: 30px;
`

export const ContentList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export const ContentItem = styled.li`
    margin-bottom: 15px;
    line-height: 1.6;
    font-size: 1.05rem;

    strong {
        font-weight: 500;
    }
`

export const RecommendationHeader = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    margin: 25px 0 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.8;
`

