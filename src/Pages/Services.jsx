import React from "react";
import "../Pages/Services.css";
import { FaCode, FaPython, FaServer, FaHtml5, FaJs, FaCss3, FaProjectDiagram, FaFileAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-title" data-aos="fade-down"><span>My Services</span></h2>

      <div className="services-grid">
        {/* Row 1 */}
        <div className="service-card" data-aos="zoom-in-up" data-aos-delay="100">
          <FaCode className="service-icon" />
          <h3>Frontend Development</h3>
          <p>Building responsive, dynamic, and visually appealing user interfaces using modern web technologies.</p>
        </div>

        <div className="service-card" data-aos="zoom-in-up" data-aos-delay="200">
          <FaPython className="service-icon" />
          <h3>Python Programming</h3>
          <p>Writing efficient Python scripts for automation, data processing, and application logic.</p>
        </div>

        <div className="service-card" data-aos="zoom-in-up" data-aos-delay="300">
          <FaProjectDiagram className="service-icon" />
          <h3>Live Project Deployment</h3>
          <p>Deploying projects to platforms like GitHub Pages, Vercel, or custom servers with complete setup.</p>
        </div>

        {/* Row 2 */}
        <div className="service-card" data-aos="zoom-in-up" data-aos-delay="400">
          <FaFileAlt className="service-icon" />
          <h3>MS Office Automation</h3>
          <p>Automating repetitive MS Word, Excel, and PowerPoint tasks using Python or VBA scripting.</p>
        </div>

        <div className="service-card" data-aos="zoom-in-up" data-aos-delay="500">
          <div className="multi-icon">
            <FaHtml5 className="service-icon html" />
            <FaCss3 className="service-icon css" />
            <FaJs className="service-icon js" />
          </div>
          <h3>HTML, CSS & JS</h3>
          <p>Creating static and interactive webpages using clean HTML5, CSS3 and JavaScript codebase.</p>
        </div>

        <div className="service-card" data-aos="zoom-in-up" data-aos-delay="600">
          <FaServer className="service-icon" />
          <h3>Node.js</h3>
          <p>Building fast, scalable server-side applications and APIs using Node.js and Express framework.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
