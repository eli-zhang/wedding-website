import styled from 'styled-components';
import { accentColor } from '../constants';

export const EmptyButton = styled.button`
    background-color: rgba(0, 0, 0, 0);
    color: ${accentColor};

    border: 1px solid ${accentColor};
    padding: 12px 20px;
    font-size: 1rem;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

    transition: background-color 0.5s ease;

    &:hover {
        cursor: pointer;
        background-color: white;
    }
`