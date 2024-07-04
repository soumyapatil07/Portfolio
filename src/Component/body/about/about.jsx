// src/Components/About.jsx
import React from 'react';
import './About.css'; // Ensure you create the corresponding CSS file

const About = () => {
  return (
    <section className="about-me" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h1>About Me</h1>
            {/* <p className="small">Information</p> */}
          </div>
        </div>
        <div className="row">
          <div className="about-content">
            <div className="row">
              <div className="img">
                <img src="%PUBLIC_URL%/pictures/soumi.png" alt="about-me" />
              </div>
              <div className="text">
                {/* <h4>I'M Soumya Odugoudar<h4> */}
                {/* <h6>I am from <span>India</span> ,stay in <span>Munich</span>(Germany)</h6> */}
                <p>
                  An ambivert with modern days skills set like punctuality and flexibility. Always willing to learn new things and strengthen skill sets by deep diving into details. Comfortable in individual or team contribution working mode. I bring professionalism and drive to perfection nature by working in a collaborative style. As a growth mindset person, I am open for feedbacks and adapt myself to demanding needs.
                </p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/soumya-patil-67490335/"><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
