// src/pages/Portfolio.jsx
import React from "react";
import "./Portfolio.css";
import projectImg from "../assets/projects/portronics-project.png";
import { FaCertificate } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title" data-aos="fade-down">My Portfolio</h2>

      {/* Projects */}
      <div className="projects-container">
        <h3 className="section-subtitle" data-aos="fade-right">Live Projects</h3>
        <div className="project-box" data-aos="zoom-in">
          <a
            href="https://github.com/Gagesh8018/Portronics.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={projectImg} alt="Portronics Project" className="project-image" />
          </a>
          <p className="project-caption">Portronics – Live Project</p>
        </div>
      </div>

      {/* Certifications */}
      <div className="certifications-container">
        <h3 className="section-subtitle" data-aos="fade-left">Certifications</h3>
        <div className="cert-grid">
          <div className="cert-card" data-aos="flip-left">
            <FaCertificate className="cert-icon" />
            <div className="cert-title">Java Internship</div>
            <a
              href="https://drive.google.com/file/d/1fWGZXiglBk7pZ6HirmkPGVyqZ77qJzpk/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card" data-aos="flip-left">
            <FaCertificate className="cert-icon" />
            <div className="cert-title">Python Programming</div>
            <a
              href="https://drive.google.com/file/d/1-53oLipRMa1ZFuUpMczPEXiT5bqn_Gdu/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>

          <div className="cert-card" data-aos="flip-left">
            <FaCertificate className="cert-icon" />
            <div className="cert-title">.NET Programming</div>
            <a
              href="https://drive.google.com/file/d/1RU9EGMY-j0PI9BCXYGga6V-iOD6eug_c/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
