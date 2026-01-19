import styled from 'styled-components';
import { accentColor, accentColorBlue, textColorDark } from '../../constants';

// Container for the entire timeline
export const TimelineContainer = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 20px;
    display: flex;
    flex-direction: column;

    // The central vertical dotted line
    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 1px;
        background-image: linear-gradient(to bottom, #333 30%, rgba(255,255,255,0) 0%);
        background-position: left;
        background-size: 1px 7px; // Dotted effect
        background-repeat: repeat-y;
        transform: translateX(-50%);
        z-index: 0;
    }

    @media (max-width: 768px) {
        &::before {
            left: 20px;
        }
    }
`;

// Individual Item Wrapper
export const TimelineItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 100px;
    position: relative;
    
    // Alternating layout for even/odd items
    flex-direction: ${({ $index }) => ($index % 2 === 0 ? 'row' : 'row-reverse')};

    // Fade in animation
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 50px;
        margin-bottom: 60px;
    }
`;

// Content block (Date + Description)
export const TimelineContent = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: ${({ $index }) => ($index % 2 === 0 ? 'flex-end' : 'flex-start')};
    text-align: ${({ $index }) => ($index % 2 === 0 ? 'right' : 'left')};

    @media (max-width: 768px) {
        width: 100%;
        align-items: flex-start;
        text-align: left;
        margin-bottom: 20px;
    }
`;

// Date Text
export const TimelineDate = styled.h3`
    font-family: 'Gabarito', sans-serif;
    font-size: 2rem;
    color: ${accentColorBlue};
    margin-bottom: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

// Description Text
export const TimelineDescription = styled.p`
    font-family: 'Jost', sans-serif;
    font-size: 1.1rem;
    color: ${textColorDark};
    line-height: 1.6;
    margin: 0;
    font-style: italic; // Matches screenshot "We met in elementary..."
    max-width: 80%;
`;

// Image Wrapper
export const TimelineImageWrapper = styled.div`
    width: 45%;
    height: 400px; // Fixed height for consistency
    overflow: hidden;
    position: relative;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.1);

    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
    }
`;

// The Image itself
export const TimelineImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

// The dot on the timeline
export const TimelineDot = styled.div`
    position: absolute;
    left: 50%;
    width: 12px;
    height: 12px;
    background-color: #333;
    border-radius: 50%;
    transform: translate(-50%, 0);
    z-index: 1;

    @media (max-width: 768px) {
        left: 20px;
    }
`;

