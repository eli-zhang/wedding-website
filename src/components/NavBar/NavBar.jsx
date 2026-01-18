import React from 'react';
import { Link } from "react-router-dom";
import { NavBarContainer, NavItem, NavItemsContainer, FilledButton, NavSpacer, HamburgerButton, MobileMenuContainer, MobileNavItem } from './styled'

const NavBar = ({ tab }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <NavBarContainer>
            <NavSpacer />

            <HamburgerButton open={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <div />
                <div />
                <div />
            </HamburgerButton>

            <NavItemsContainer>
                <Link to="/" style={{ textDecoration: 'none' }}><NavItem active={tab === "Home"}>Home</NavItem></Link>
                <Link to="/about-us" style={{ textDecoration: 'none' }}><NavItem active={tab === "About us"}>About us</NavItem></Link>
                <Link to="/hotels" style={{ textDecoration: 'none' }}><NavItem active={tab === "Hotels"}>Hotels</NavItem></Link>
                <Link to="/transportation" style={{ textDecoration: 'none' }}><NavItem active={tab === "Transportation"}>Transportation</NavItem></Link>
                <Link to="/things-to-do" style={{ textDecoration: 'none' }}><NavItem active={tab === "Things to do"}>Things to do</NavItem></Link>
                <Link to="/faq" style={{ textDecoration: 'none' }}><NavItem active={tab === "FAQ"}>FAQ</NavItem></Link>
                <Link to="/rsvp" style={{ textDecoration: 'none' }}><NavItem active={tab === "RSVP"}>RSVP</NavItem></Link>
            </NavItemsContainer>

            <MobileMenuContainer open={isMobileMenuOpen}>
                <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "Home"}>Home</MobileNavItem></Link>
                <Link to="/about-us" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "About us"}>About us</MobileNavItem></Link>
                <Link to="/hotels" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "Hotels"}>Hotels</MobileNavItem></Link>
                <Link to="/transportation" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "Transportation"}>Transportation</MobileNavItem></Link>
                <Link to="/things-to-do" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "Things to do"}>Things to do</MobileNavItem></Link>
                <Link to="/faq" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "FAQ"}>FAQ</MobileNavItem></Link>
                <Link to="/rsvp" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "RSVP"}>RSVP</MobileNavItem></Link>
            </MobileMenuContainer>
        </NavBarContainer>
    )
}

export default NavBar;