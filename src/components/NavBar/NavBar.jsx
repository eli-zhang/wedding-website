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
                <Link to="/rsvp" style={{ textDecoration: 'none' }}><NavItem active={tab === "RSVP"}>RSVP</NavItem></Link>
                <Link to="/about-us" style={{ textDecoration: 'none' }}><NavItem active={tab === "About us"}>About us</NavItem></Link>
                <Link to="/schedule" style={{ textDecoration: 'none' }}><NavItem active={tab === "Schedule"}>Schedule</NavItem></Link>
                <Link to="/travel" style={{ textDecoration: 'none' }}><NavItem active={tab === "Travel"}>Travel</NavItem></Link>
                <Link to="/activities" style={{ textDecoration: 'none' }}><NavItem active={tab === "Activities"}>Activities</NavItem></Link>
                <Link to="/faq" style={{ textDecoration: 'none' }}><NavItem active={tab === "FAQ"}>FAQ</NavItem></Link>
            </NavItemsContainer>

            <MobileMenuContainer open={isMobileMenuOpen}>
                <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "Home"}>Home</MobileNavItem></Link>
                <Link to="/rsvp" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "RSVP"}>RSVP</MobileNavItem></Link>
                <Link to="/about-us" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "About us"}>About us</MobileNavItem></Link>
                <Link to="/schedule" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "Schedule"}>Schedule</MobileNavItem></Link>
                <Link to="/travel" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "Travel"}>Travel</MobileNavItem></Link>
                <Link to="/activities" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "Activities"}>Activities</MobileNavItem></Link>
                <Link to="/faq" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}><MobileNavItem active={tab === "FAQ"}>FAQ</MobileNavItem></Link>
            </MobileMenuContainer>
        </NavBarContainer>
    )
}

export default NavBar;