import React from 'react';
import './Experience.css';
import milprosysLogo from '../assets/logo.jpg';
import codtechlogo  from '../assets/logo2.jpg';
import projectImage from '../assets/projects/portronics-project.png';

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="experience-title">Professional Experience</h2>

      {/* Internship Box */}
      <div className="experience-box">
        <div className="box-header">
          <img src={milprosysLogo} alt="Milprosys Logo" className="company-logo" />
          <div className="company-info">
            <h3 className="position-title">Frontend Developer (Intern)</h3>
            <p className="duration">July 2024 - Oct 2024</p>
          </div>
        </div>
        <p className="experience-description">
          Worked as a Frontend Developer Intern at Milprosys Pvt Ltd. Gained hands-on experience in building responsive web applications using React, Bootstrap, and modern JavaScript.
        </p>
        <div className="project-section">
          <h4>Project:</h4>
          <a
            href="https://github.com/Gagesh8018/Portronics.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={projectImage} alt="Portronics Project" className="project-img" />
          </a>
        </div>
        <div className="experience-box">
        <div className="box-header">
          <img src={codtechlogo} alt="Milprosys Logo" className="company-logo" />
          <div className="company-info">
            <h3 className="position-title">Java Programming (Intern)</h3>
            <p className="duration">Apr 2025 - May 2025</p>
          </div>
        </div>
        <p className="experience-description">
          Worked as a Java Intern and gained practical experience in core Java, object-oriented programming, and JDBC. Developed small-scale console and GUI-based applications, and improved understanding of backend logic, exception handling, and database integration. Strengthened problem-solving skills and built a strong foundation in Java development.
        </p>
      </div>
      </div>

      {/* Full-Time Job Box */}
      <div className="experience-box">
        <div className="box-header">
          <img src={milprosysLogo} alt="Milprosys Logo" className="company-logo" />
          <div className="company-info">
            <h3 className="position-title">Frontend Developer (Full-Time)</h3>
            <p className="duration">Oct 2024 - July 2025</p>
          </div>
        </div>
        <p className="experience-description">
          Continued working with Milprosys Pvt Ltd as a full-time developer. Contributed to real-time production systems, improving user experience and interface consistency across platforms.
        </p>
      </div>
    </div>
  );
};

export default Experience;
