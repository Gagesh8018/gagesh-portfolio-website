// src/Components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../Components/Navbar.css';
import myLogo from '../assets/Passport.jpg';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container fluid className="d-flex justify-content-between align-items-center custom-border">
        {/* Logo */}
        <div className="logo-container">
          <img src={myLogo} alt="Logo" className="navbar-logo" />
        </div>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Nav Links */}
            <Nav className="mx-auto nav-links">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#services" className="nav-link">Service</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#contact" className="nav-link">Contact</a>
            </Nav>

            {/* Social Icons */}
            <div className="icons-container">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
