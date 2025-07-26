import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/Passport.jpg';
import './Navbar.css';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Collapse mobile menu after click
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="custom-navbar"
      data-aos="fade-down"
    >
      <Container fluid>
        {/* Logo Left */}
        <Navbar.Brand href="#home" className="navbar-logo">
          <img src={logo} alt="logo" className="navbar-image" />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />

        {/* Links & Icons */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center Nav Links */}
          <Nav className="mx-auto navbar-center">
            {['Home', 'About', 'Experience', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <Link
                key={item}
                activeClass="active"
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                onClick={handleNavClick}
              >
                {item}
              </Link>
            ))}
          </Nav>

          {/* Right Icons */}
          <div className="navbar-icons d-none d-lg-flex">
            <a href="https://github.com/Gagesh8018?tab=repositories" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/d-gagesh-kumar-patra-8ab101234" target="_blank"><FaLinkedin /></a>
            <a href="https://twitter.com/GageshPatra" target="_blank"><FaTwitter /></a>
            <a href="https://www.instagram.com/gageshpatra?igsh=MXJvMjJneTJkNzcxMw==" target="_blank"><FaInstagram /></a>
            <a href="https://www.facebook.com/gagesh.patra.1/" target="_blank"><FaFacebook /></a>
          </div>

          {/* Mobile View Icons */}
          <div className="navbar-icons-mobile d-lg-none mt-3">
            <a href="https://github.com/Gagesh8018?tab=repositories" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/d-gagesh-kumar-patra-8ab101234" target="_blank"><FaLinkedin /></a>
            <a href="https://twitter.com/GageshPatra" target="_blank"><FaTwitter /></a>
            <a href="https://www.instagram.com/gageshpatra?igsh=MXJvMjJneTJkNzcxMw==" target="_blank"><FaInstagram /></a>
            <a href="https://www.facebook.com/gagesh.patra.1/" target="_blank"><FaFacebook /></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
