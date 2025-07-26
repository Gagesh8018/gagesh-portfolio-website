import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Home.css';
import Photo1 from '../assets/Photo1.jpg';
import Photo2 from '../assets/Photo2.jpg';
import Photo3 from '../assets/Photo3.jpg';
import Photo4 from '../assets/Photo4.jpg';

const Home = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = [Photo1, Photo2, Photo3, Photo4];

  const handleHover = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const designations = ['Frontend Developer', 'Python Programmer'];
  const [currentText, setCurrentText] = useState('');
  const [designationIndex, setDesignationIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      const fullText = designations[designationIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setDesignationIndex((prev) => (prev + 1) % designations.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, designationIndex]);

  return (
    <div className="home-section">
      <Container fluid className="home-content">
        <Row className="align-items-center">
          <Col md={6} className="text-content">
            <p className="iam-text">I am</p>
            <h1 className="gradient-name">D Gagesh Kumar Patra</h1>
            <h3 className="designation-typing">{currentText}<span className="cursor">|</span></h3>
            <p className="intro">
              A passionate developer focused on building modern, elegant, and responsive web
              applications with clean and efficient code.
            </p>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebook />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>
          </Col>

          <Col md={6} className="image-content">
            <Image
              src={photos[photoIndex]}
              alt="Profile"
              fluid
              className="profile-img"
              onMouseEnter={handleHover}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
