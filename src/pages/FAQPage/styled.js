import styled from 'styled-components';
import { accentColor, accentColorBlue, textColorDark } from '../../constants';

export const CenteredPlaceholder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 200px);
    font-size: 3rem;
    font-family: 'Jost', sans-serif;
    color: ${textColorDark};
    text-align: center;
`

export const FAQContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 80px 80px;
`

export const FAQTitle = styled.h1`
    color: ${accentColor};
    font-size: 3.5rem;
    font-family: 'Gabarito', sans-serif;
    font-weight: 500;
    line-height: 1.2;
    margin: 0 0 60px 0;
    text-align: left;
`

export const FAQList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
`

export const FAQItem = styled.li`
    border-bottom: 1px solid rgba(77, 90, 109, 0.1);
`

export const FAQQuestion = styled.h2`
    color: ${accentColorBlue};
    font-size: 1.8rem;
    font-family: 'Gabarito', sans-serif;
    font-weight: 500;
    line-height: 1.3;
    margin: 0;
    padding: 30px 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const ToggleIcon = styled.span`
    font-size: 1.5rem;
    font-weight: 300;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
`

export const FAQAnswer = styled.div`
    color: ${textColorDark};
    font-size: 1.1rem;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    line-height: 1.8;
    margin: 0;
    max-height: ${props => props.isOpen ? '1000px' : '0'};
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${props => props.isOpen ? '1' : '0'};
    padding-bottom: ${props => props.isOpen ? '30px' : '0'};
    
    b {
        font-weight: 600;
    }
    
    ul {
        margin: 10px 0;
        padding-left: 30px;
    }
    
    li {
        margin: 8px 0;
    }
`