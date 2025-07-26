import React, { useEffect } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const skillsLeft = [
  { name: 'React', value: 90 },
  { name: 'HTML/CSS/JS', value: 100 },
  { name: 'Node.js', value: 80 },
];

const skillsRight = [
  { name: 'Python', value: 90 },
  { name: 'Microsoft Office', value: 100 },
  { name: 'Bootstrap', value: 95 },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const renderSkillBar = (skill, index) => (
    <div className="skill-bar mb-4" key={index} data-aos="fade-up">
      <div className="d-flex justify-content-between mb-1">
        <strong>{skill.name}</strong>
        <span>{skill.value}%</span>
      </div>
      <ProgressBar now={skill.value} animated className="gradient-bar" />
    </div>
  );

  return (
    <div className="about-section py-5">
      <Container>
        <h2 className="text-center mb-5" data-aos="fade-down">About Me</h2>

        <Row className="mb-4">
          <Col md={12} data-aos="zoom-in-up">
            <div className="info-box">
              <p>
                As a passionate <strong>Frontend Developer</strong>, I specialize in building interactive and responsive websites using modern technologies like React, HTML, CSS, and JavaScript. My goal is to create user-friendly and aesthetically pleasing digital experiences.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12} data-aos="zoom-in-up" data-aos-delay="200">
            <div className="info-box">
              <p>
                As a <strong>Python Programmer</strong>, I have hands-on experience in writing efficient scripts, automating tasks, and working on backend logic. I enjoy solving problems and writing clean, maintainable code.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <h3 className="text-center mb-4" style={{fontWeight: 'bold', fontSize: '2.5rem'}}>Skills</h3>
          <Col md={6}>
            {skillsLeft.map(renderSkillBar)}
          </Col>
          <Col md={6}>
            {skillsRight.map(renderSkillBar)}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
