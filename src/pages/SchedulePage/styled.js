import styled from 'styled-components';
import { accentColor, accentColorBlue, backgroundPageColor, textColorDark, mobileBreakpoint } from '../../constants';

export const PageContainer = styled.div`
    background-color: ${backgroundPageColor};
    min-height: 100vh;
`;

export const ScheduleContainer = styled.div`
    max-width: 1040px;
    margin: 0 auto;
    padding: 60px 20px;
`;

export const PageSubtitle = styled.p`
    color: ${accentColor};
    font-size: 3.5rem;
    font-family: 'Gabarito', sans-serif;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: ${mobileBreakpoint}) {
        font-size: 2.5rem;
        margin-bottom: 15px;
    }
`;

export const ScheduleDateTitle = styled.h2`
    color: ${textColorDark};
    font-size: 1.8rem;
    font-family: 'Gabarito', sans-serif;
    font-weight: 400;
    margin-bottom: 40px;
    text-align: center;

    @media (max-width: ${mobileBreakpoint}) {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
`;

export const ScheduleTableContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto 60px auto;
    display: flex;
    justify-content: center;
`;

export const ScheduleTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const TableRow = styled.tr`
    &:last-child {
        border-bottom: none;
    }
`;

export const TimeCell = styled.td`
    padding: 15px 40px 15px 0;
    font-weight: 600;
    color: ${accentColorBlue};
    width: 35%;
    font-size: 1.4rem;
    font-family: 'Gabarito', sans-serif;
    border-right: 1px solid rgba(77, 90, 109, 0.2);
    text-align: right;

    @media (max-width: ${mobileBreakpoint}) {
        padding: 10px 20px 10px 0;
        width: 35%;
        font-size: 1.1rem;
    }
`;

export const ItemCell = styled.td`
    padding: 15px 0 15px 40px;
    color: ${textColorDark};
    font-size: 1.2rem;
    font-family: 'Jost', sans-serif;
    font-weight: 400;

    @media (max-width: ${mobileBreakpoint}) {
        padding: 10px 0 10px 20px;
        font-size: 1rem;
    }
`;
