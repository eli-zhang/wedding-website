import styled, { keyframes } from 'styled-components';
import homePageImage from '../../images/blueberry_other.jpg';
import holdingHandsImage from '../../images/holding_hands.jpg';
import garfieldParkImage from '../../images/garfield_park.png';
import zooImage from '../../images/lincoln_park_zoo.jpg';
import trainImage from '../../images/train.jpg';
import paperTexture from '../../images/paper_texture.jpg';
import { accentColor, accentColorBlue, accentColorTitle, accentColorLighter, mobileBreakpoint, textColorDark } from '../../constants';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Ampersand = styled.span`
    font-family: 'Ibarra Real Nova', serif;
    font-style: italic;
    font-size: 10rem;
    color: ${accentColor};
    line-height: 1;
    margin: -70px 0;
    position: relative;
    z-index: -1;
`

export const EmptyButton = styled.button`
    background-color: rgba(0, 0, 0, 0);
    color: ${accentColor};

    border: 1px solid ${accentColor};
    padding: 15px 150px;
    font-size: 1.5rem;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

    transition: background-color 0.5s ease;

    &:hover {
        cursor: pointer;
        background-color: white;
    }

    @media (max-width: ${mobileBreakpoint}) {
        padding: 15px 50px;
        font-size: 1.2rem;
    }
`

export const ExploreRoomsButtonContainer = styled.div`
    position: absolute;
    display: inline-block;
    top: 58%;
    left: 70px;
`

export const BackgroundHeaderContainer = styled.div`
    /* // margin-top: 110px; */
    position: relative;
    height: 800px;
    overflow: hidden;

    @media (max-width: ${mobileBreakpoint}) {
        height: 100vh;
        min-height: 600px;
    }
`

export const HeaderBackgroundRect = styled.div`
    position: absolute;
    top: 0;
    background-color: #F3F3F3;
    height: 800px;
    display: block;
    width: 70%;
`;

export const LargeHomeImage = styled.div`
    position: absolute;
    top: 0;
    left: 80px;
    width: calc(100% - 160px);
    height: 800px;
    background-image: url(${homePageImage});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center center;
`

export const TaglineContainer = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    top: calc(50px + 325px);
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 90px 115px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    opacity: 1;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${paperTexture});
        background-repeat: repeat;
        opacity: 0.3;
        pointer-events: none;
        z-index: -1;
    }

`

export const TaglineText = styled.div`
    color: ${accentColorTitle};
    font-size: 8rem;
    font-family: 'Bodoni Moda', serif;
    font-weight: 500;
    text-align: center;
    line-height: 1.0;
    animation: ${fadeIn} 0.7s ease-in;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
        position: relative;
        z-index: 1;
    }
`

export const TaglineSubtitleContainer = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
`

export const TaglineSubtitle = styled.div`
    color: ${accentColor};
    font-size: 2.7rem;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    text-align: center;
    margin: 10px;
    animation: ${fadeIn} 0.7s ease-in;
    
    b {
        font-size: 1.8rem;
        font-weight: 600;
    }
`

export const TaglineSubtitleLocation = styled.div`
    color: ${accentColor};
    font-size: 1.8rem;
    font-family: "Italiana", sans-serif;
    font-weight: 400;
    text-align: center;
    margin-left: 160px;
    animation: ${fadeIn} 0.7s ease-in;
    
    b {
        font-size: 1.8rem;
        font-weight: 600;
    }

    @media (max-width: ${mobileBreakpoint}) {
        margin-left: 0;
    }
`

export const TaglineSubtitleDate = styled.div`
    color: ${accentColor};
    font-size: 3rem;
    font-family: 'Italiana', serif;
    font-weight: 400;
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    animation: ${fadeIn} 0.7s ease-in;
    
    b {
        font-size: 1.8rem;
        font-weight: 600;
    }
`

export const TaglineDateLeft = styled.span`
    color: ${accentColor};
    font-size: 0.8rem;
    font-family: 'Ibarra Real Nova', serif;
    font-weight: 400;
    text-transform: lowercase;
    line-height: 3rem;
    display: inline-block;
`

export const TaglineDateCenter = styled.span`
    color: ${accentColor};
    font-size: 3rem;
    font-family: 'Italiana', serif;
    font-weight: 400;
    line-height: 3rem;
    display: inline-block;
`

export const TaglineDateRight = styled.span`
    color: ${accentColor};
    font-size: 0.8rem;
    font-family: 'Ibarra Real Nova', serif;
    font-weight: 400;
    text-transform: lowercase;
    line-height: 3rem;
    display: inline-block;
`

export const TaglineButtonContainer = styled.div`
    animation: ${fadeIn} 0.7s ease-in;
`

export const UtilitiesInfoContainer = styled.div`
    position: relative;
    margin: 0 70px;
    padding: 30px;
`

export const SideLine = styled.div`
    position: absolute;
    left: 0;
    height: 70%;
    width: 4px;
    top: 15%;
    background-color: ${accentColor};
`


export const UtilitiesTaglineHeader = styled.h1`
    color: #555555;
    font-size: 2rem;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    /* text-transform: uppercase; */
`

export const UtilitiesTagline = styled.span`
    color: ${textColorDark};
    font-size: 1rem;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
`

export const UtilitiesTaglineHighlight = styled.b`
    color: ${accentColor};
`

export const SectionSpacer = styled.div`
    width: 100%;
    height: 160px;
`

export const ContentSection = styled.div`
    display: flex;
    flex-direction: row;
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

export const ContentSectionReversed = styled.div`
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
    font-family: 'Ibarra Real Nova', serif;
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
    font-family: 'Ibarra Real Nova', serif;
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
    right: -80px;
    top: -80px;
    z-index: 0;

    @media (max-width: ${mobileBreakpoint}) {
        display: none;
    }
`

export const ContentImageBackgroundLeft = styled.div`
    position: absolute;
    width: 100%;
    max-width: 500px;
    height: 600px;
    background-color: ${accentColorLighter};
    left: -80px;
    top: -80px;
    z-index: 0;

    @media (max-width: ${mobileBreakpoint}) {
        display: none;
    }
`

export const ContentImage = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 600px;
    background-image: url(${garfieldParkImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    z-index: 0;
    filter: contrast(80%) saturate(80%);
    @media (max-width: ${mobileBreakpoint}) {
        width: calc(100% + 40px);
        margin-left: -20px;
        margin-right: -20px;
        max-width: none;
        height: 400px;
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
    @media (max-width: ${mobileBreakpoint}) {
        width: calc(100% + 40px);
        margin-left: -20px;
        margin-right: -20px;
        max-width: none;
        height: 400px;
    }
`

export const ContentImageSchedule = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 600px;
    background-image: url(${holdingHandsImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    z-index: 0;
    filter: contrast(80%) saturate(80%);
    @media (max-width: ${mobileBreakpoint}) {
        width: calc(100% + 40px);
        margin-left: -20px;
        margin-right: -20px;
        max-width: none;
        height: 400px;
    }
`

export const ContentImageThingsToDo = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 600px;
    background-image: url(${zooImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    z-index: 0;
    filter: contrast(80%) saturate(80%);
    @media (max-width: ${mobileBreakpoint}) {
        width: calc(100% + 40px);
        margin-left: -20px;
        margin-right: -20px;
        max-width: none;
        height: 400px;
    }
`

export const RotatedSideText = styled.div`
    position: fixed;
    left: -8px;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    transform-origin: center;
    white-space: nowrap;
    font-family: 'Jost', sans-serif;
    font-size: 1.35rem;
    color: ${accentColor};
    z-index: 10;

    @media (max-width: ${mobileBreakpoint}) {
        display: none;
    }
`

const fadeInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const SaveTheDateContainer = styled.div`
    padding: 100px 150px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: ${({ $isVisible }) => ($isVisible ? 'translateX(0)' : 'translateX(-50px)')};
    transition: opacity 1s ease-out, transform 1s ease-out;

    @media (max-width: ${mobileBreakpoint}) {
        padding: 60px 20px;
        gap: 40px;
    }
`

export const TopThingsList = styled.ul`
    padding-left: 20px;
    margin-top: 10px;
    color: ${textColorDark};
    font-size: 1.1rem;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    line-height: 1.6;
`

export const TopThingsItem = styled.li`
    margin-bottom: 8px;
`

export const SaveTheDateHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const SaveTheDateTitle = styled.h2`
    font-family: 'Ibarra Real Nova', serif;
    font-size: 4rem;
    color: #5d5656;
    font-weight: 400;
    margin: 0;
`

export const SaveTheDateSubtext = styled.p`
    font-family: 'Jost', sans-serif;
    font-size: 1.2rem;
    color: #8c8585;
    margin: 0;
`

export const SaveTheDateDetails = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 40px;

    @media (max-width: ${mobileBreakpoint}) {
        flex-direction: column;
        gap: 30px;
    }
`

export const DetailColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
    border-top: 1px solid #d3d3d3;
    padding-top: 20px;
`

export const DetailLabel = styled.span`
    font-family: 'Jost', sans-serif;
    font-size: 1rem;
    color: #8c8585;
`

export const DetailValue = styled.span`
    font-family: 'Ibarra Real Nova', serif;
    font-size: 3rem;
    color: #5d5656;
    font-weight: 400;
    margin-top: -10px;
`

export const DetailSubValue = styled.span`
    font-family: 'Jost', sans-serif;
    font-size: 1.1rem;
    color: #8c8585;
    line-height: 1.5;
`