import styled, { keyframes } from 'styled-components';
import cardInvitation from '../../images/card_invitation.png';
import paperTexture from '../../images/paper_texture.jpg';

const slideIn = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

export const PageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #d9c55d;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

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
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url(${cardInvitation});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    animation: ${slideIn} 1.5s ease-out;
    z-index: 1;
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
        transform: translateY(-50%) translateX(5px);
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
