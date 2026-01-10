import styled from 'styled-components'
import { accentColor, accentColorLighter, accentColorOffWhite, mobileBreakpoint, textColorDark } from '../../constants'

export const Title = styled.h1`
    color: ${textColorDark};
    font-size: 30px;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    margin-left: 30px;
`

export const NavBarContainer = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
    box-sizing: border-box;
    background-color: ${accentColorOffWhite};
    padding: 40px 20px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
    flex-basis: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${mobileBreakpoint}) {
        padding: 20px;
        justify-content: flex-end;
    }
`

export const NavSpacer = styled.div`
    flex: 1;
`

export const NavItemsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: ${mobileBreakpoint}) {
        display: none;
    }
`

export const NavItem = styled.li`
    display: block;
    margin-left: 35px;
    margin-right: 35px;
    margin-top: 15px;

    color: #444444;
    font-size: 1rem;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    transition: all 0.1s ease-in-out;
    position: relative;
    padding-left: 0;
    padding-right: 0;
    white-space: nowrap;

    &:hover {
        color: black;
        cursor: pointer;
        &:before {
            transform: scaleX(1);
        }
    }

    &:before {  
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 1px;
        z-index: 0;
        background-color: ${accentColorLighter};
        transform: scaleX(${props => props.active ? 1 : 0});
        transform-origin: left;
        transition: transform 0.2s ease-out, opacity 0.2s ease-out 0.3s;
    }
`

export const FilledButton = styled.button`
    background-color: ${accentColor};
    color: white;
    margin-right: 15px;

    border-style: none;
    padding: 12px 20px;
    font-size: 1rem;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);

    &:hover {
        cursor: pointer;
    }
`

export const HamburgerButton = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    margin-right: 20px;

    div {
        width: 30px;
        height: 3px;
        background: #333;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media (max-width: ${mobileBreakpoint}) {
        display: flex;
    }
`

export const MobileMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${accentColorOffWhite};
    height: 100vh;
    width: 100%;
    text-align: center;
    padding: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    z-index: 5;

    @media (min-width: ${mobileBreakpoint}) {
        display: none;
    }
`

export const MobileNavItem = styled(NavItem)`
    font-size: 2rem;
    margin: 20px 0;
    list-style-type: none;
    
    &:before {
        display: none;
    }
`
