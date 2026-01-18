import styled from 'styled-components';
import { textColorDark } from '../../constants';

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

