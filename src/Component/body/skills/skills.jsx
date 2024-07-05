// src/Components/Skills.jsx
import React from 'react';
import './Skills.css'; // Ensure you create the corresponding CSS file
import img from "../../../../public/pictures/work.png"

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
                  <li>1+ year of professional experience across software application and website testing.</li>
                  <li>Competitive knowledge in bug tracking tools like Jira and ClearQuest.</li>
                  <li>Working knowledge of Eclipse, PyCharm, and Visual Studio Code.</li>
                  <li>Understanding of Software development life cycle process.</li>
                  <li>Prepare test setups like installing a browser and other applications.</li>
                  <li>Reproduce the customer reported bugs and document testing steps.</li>
                  <li>Work with development teams and other stakeholders to drive it to resolution.</li>
                  <li>Basic coding experience of HTML 5, CSS 3.</li>
                  <li>Working knowledge of Selenium Webdriver technologies.</li>
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
