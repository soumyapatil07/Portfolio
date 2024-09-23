// src/Components/Skills.jsx
import React from 'react';
import './Skills.css'; // Ensure you create the corresponding CSS file
import img from "../../../pictures/work.png"

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row align-items-center">
          <div className="skills-content">
            <div className="row">
              <div className="section-title">
                <h1>Professional Skills</h1>
                <ul>
                    <li>Completed over 3 years of professional experience in software application and website testing </li>
                    <li>Coding expertise in Python</li>
                    <li>Proficient in creating brochures using HTML, CSS, and InDesign </li>
                    <li>Reproduce the bugs by sending API calls using postman tool </li>
                    <li>Conducted thorough manual testing to ensure high-quality brochures </li>
                    <li>Utilized bug tracking tools such as Jira, hubSpot and monday.com </li>
                    <li>Collaborated closely with product managers and development teams to meet </li>
                    <li>software quality and time deliverables </li>
                    <li>Efficiently managed and tracked code changes </li>
                    <li>Deep understanding of the software development life cycle process </li>
                    <li>Expertly set up test cases and required testing environments </li>
                    <li>Meticulously reproduced and reported bugs to the respective development team by raising tickets </li>
                    <li>Developed and maintained strong relationships with stakeholders and colleagues </li>
                    <li>Willingness to learn </li>
                  
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="skill-box">
                <h6>Python</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: '60%' }}>
                    <span>60%</span>
                  </div>
                </div>
              </div>
              <div className="skill-box">
                <h6>Shell Script</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: '50%' }}>
                    <span>50%</span>
                  </div>
                </div>
              </div>
              <div className="skill-box">
                <h6>Selenium Webdriver</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: '70%' }}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
              <div className="skill-box">
                <h6>HTML5</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: '60%' }}>
                    <span>60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img">
            <img src={img} alt="skills" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
