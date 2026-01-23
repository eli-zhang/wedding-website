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
    25% {
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
    cursor: ${props => props.$openState === 'unopened' ? 'pointer' : 'default'};

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

export const InvitationGroup = styled.div`
    position: relative;
    width: 60vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: scale 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 1;

    &:hover {
        scale: ${props => props.$openState === 'unopened' ? 1.1 : 1};
    }
`;

export const InvitationCard = styled.div`
    position: absolute;
    width: 58vw;
    height: 58vh;
    animation: ${props => (props.$openState === 'opening' || props.$openState === 'opened') ? openCard : slideIn} 
               ${props => (props.$openState === 'opening' || props.$openState === 'opened') ? '3s' : '1.5s'} 
               cubic-bezier(0.19, 1, 0.22, 1) forwards;
    z-index: ${props => props.$openState === 'opened' ? 4 : 2};
`;

export const CardInner = styled.div.attrs(props => ({
    style: {
        transform: `perspective(1000px) rotateX(${props.$tilt.x}deg) rotateY(${props.$tilt.y}deg)`
    }
}))`
    width: 100%;
    height: 100%;
    background-image: url(${cardInvitation});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    transition: transform 0.1s ease-out, scale 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform-style: preserve-3d;

    &:hover {
        cursor: ${props => props.$openState === 'opened' ? 'pointer' : 'inherit'};
        scale: ${props => props.$openState === 'opened' ? 1.3 : 1};
    }
`;


export const EnvelopeBottom = styled.div`
    position: absolute;
    width: 60vw;
    height: 60vh;
    background-image: url(${envelopeBottom});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    animation: ${props => (props.$openState === 'opening' || props.$openState === 'opened') ? openEnvelope : slideIn} 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    z-index: 1;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), scale 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const EnvelopeTop = styled.div`
    position: absolute;
    width: 60vw;
    height: 60vh;
    background-image: url(${envelopeTop});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    animation: ${props => (props.$openState === 'opening' || props.$openState === 'opened') ? openEnvelope : slideIn} 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    z-index: 3;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), scale 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
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

export const FadeOverlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: #faf4f4;
    z-index: 1000;
    pointer-events: none;
    opacity: ${props => props.$isVisible ? 1 : 0};
    transition: opacity 0.8s ease-in-out;
`;
