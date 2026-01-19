import styled, { keyframes } from 'styled-components';
import cardInvitation from '../../images/invitation/card_invitation.png';
import envelopeBottom from '../../images/invitation/envelope_bottom.png';
import envelopeTop from '../../images/invitation/envelope_top.png';

import paperTexture from '../../images/paper_texture.jpg';

const slideIn = keyframes`
    0% {
        transform: translateX(-110%) rotate(25deg);
    }
    100% {
        transform: translateX(0) rotate(15deg);
    }
`;

const openEnvelope = keyframes`
    from {
        transform: translate(0, 0) rotate(15deg);
    }
    to {
        transform: translate(-10vw, ${20 / 0.26794919243}vh) rotate(15deg);
    }
`;

const openCard = keyframes`
    0% {
        transform: translate(0, 0) rotate(15deg);
    }
    60% {
        transform: translate(${5 / 4}vw, -${5 / 4 / 0.26794919243}vh) rotate(15deg);
    }
    100% {
        transform: translate(${5 / 4}vw, -${5 / 4 / 0.26794919243}vh) rotate(0deg);
    }
`;

export const PageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #708594;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.$isOpened ? 'default' : 'pointer'};

    &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${paperTexture});
        background-repeat: repeat;
        opacity: 0.5;
        z-index: 0;
        pointer-events: none;
    }
`;

export const InvitationCard = styled.div`
    position: absolute;
    width: 79vw;
    height: 79vh;
    background-image: url(${cardInvitation});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    animation: ${props => props.$isOpened ? openCard : slideIn} ${props => props.$isOpened ? '3s' : '1.5s'} cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;;
    z-index: 2;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        transform: ${props => props.$isOpened
        ? `translate(${5 / 4}vw, -${5 / 4 / 0.26794919243}vh) rotate(15deg) scale(1.15)`
        : 'rotate(15deg) scale(1.15)'};
    }
`;


export const EnvelopeBottom = styled.div`
    position: absolute;
    width: 80vw;
    height: 80vh;
    background-image: url(${envelopeBottom});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    animation: ${props => props.$isOpened ? openEnvelope : slideIn} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;;
    z-index: 1;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        transform: ${props => props.$isOpened
        ? `translate(-10vw, ${20 / 0.26794919243}vh) rotate(15deg) scale(1.15)`
        : 'scale(1.15)'};
    }
`;

export const EnvelopeTop = styled.div`
    position: absolute;
    width: 80vw;
    height: 80vh;
    background-image: url(${envelopeTop});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    animation: ${props => props.$isOpened ? openEnvelope : slideIn} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;;
    z-index: 3;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        transform: ${props => props.$isOpened
        ? `translate(-10vw, ${20 / 0.26794919243}vh) rotate(15deg) scale(1.15)`
        : 'scale(1.15)'};
    }
`;



export const NavigationArrow = styled.div`
    position: fixed;
    right: 100px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #333;
    cursor: pointer;
    z-index: 10;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
        transform: translateY(-50%) translateX(5px) scale(1.15);
        color: #000;
    }

    svg {
        display: block;
    }

    span {
        font-family: 'Jost', sans-serif;
        font-size: 1.1rem;
        text-align: center;
        white-space: nowrap;
    }
`;
