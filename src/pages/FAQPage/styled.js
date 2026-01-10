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
    font-family: 'Bodoni Moda', serif;
    font-weight: 500;
    line-height: 1.2;
    margin: 0 0 60px 0;
    text-align: center;
`

export const FAQList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const FAQItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const FAQQuestion = styled.h2`
    color: ${accentColorBlue};
    font-size: 1.8rem;
    font-family: 'Bodoni Moda', serif;
    font-weight: 500;
    line-height: 1.3;
    margin: 0;
`

export const FAQAnswer = styled.div`
    color: ${textColorDark};
    font-size: 1.1rem;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    line-height: 1.8;
    margin: 0;
    
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