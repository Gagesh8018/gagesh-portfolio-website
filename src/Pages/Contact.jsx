import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="contact-section">
      <Container>
        <h2 className="contact-heading text-center mb-5">Contact Us</h2>
        <Row className="contact-box glassmorphism">
          <Col md={6} className="contact-left">
            <h4>Address</h4>
            <p>Gandhinagar, Semiliguda Dist Koraput, Bhubaneswar 764036</p>
            <h4>Email</h4>
            <p>gageshpatra8018@gmail.com</p>
            <h4>Location</h4>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps?q=Semiliguda%20Dist%20Koraput&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </Col>

          <Col md={6} className="contact-right">
          <h3>Form</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Your Name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="Your Email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Your Message"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>

              {submitted && (
                <p className="thank-you-msg mt-3">
                  Thank you for sending the message!
                </p>
              )}
            </Form>

            <div className="social-icons mt-4 text-center">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
