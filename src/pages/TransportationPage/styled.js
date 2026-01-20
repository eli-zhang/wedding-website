import styled from 'styled-components';
import trainImage from '../../images/train.jpg';
import bridgeImage from '../../images/bridge.jpg';
import { accentColor, accentColorBlue, accentColorLighter, mobileBreakpoint, textColorDark } from '../../constants';

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

export const TravelContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 80px;
`

export const ContentSection = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    padding: 80px 80px;
    gap: 60px;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: ${mobileBreakpoint}) {
        flex-direction: column;
        padding: 60px 20px;
        gap: 40px;
    }
`

export const ContentTextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ContentTitle = styled.h2`
    color: ${accentColor};
    font-size: 3rem;
    font-family: 'Gabarito', sans-serif;
    font-weight: 500;
    line-height: 1.2;
    margin: 0;
`

export const ContentBody = styled.p`
    color: ${textColorDark};
    font-size: 1.1rem;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
`

export const ContentSubsection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 30px;
    
    &:first-of-type {
        margin-top: 0;
    }
`

export const ContentSubsectionTitle = styled.h3`
    color: ${accentColorBlue};
    font-size: 1.5rem;
    font-family: 'Gabarito', sans-serif;
    font-weight: 500;
    line-height: 1.3;
    margin: 0;
`

export const ContentImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const ContentImageBackground = styled.div`
    position: absolute;
    width: 100%;
    max-width: 500px;
    height: 600px;
    background-color: ${accentColorLighter};
    left: -80px;
    top: -80px;
    z-index: 0;

    @media (max-width: ${mobileBreakpoint}) {
        left: -20px;
        top: -20px;
        width: calc(100% + 40px);
    }
`

export const ContentImageTravel = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 600px;
    background-image: url(${trainImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    z-index: 0;
    filter: contrast(80%) saturate(80%);
`

export const BridgeImageContainer = styled.div`
    width: 100%;
    max-width: 1040px;
    height: 500px;
    margin: 0 auto 80px;
    overflow: hidden;

    @media (max-width: ${mobileBreakpoint}) {
        height: 300px;
        padding: 0 20px;
        width: auto;
    }
`

export const BridgeImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${bridgeImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`