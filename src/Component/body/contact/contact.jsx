// src/Components/Contact.jsx
import React from 'react';
import './Contact.css'; // Ensure you create the corresponding CSS file

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <h1>Get In Touch</h1>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            <div className="row">
              <div className="text">
                <h2>Drop Me A Line</h2>
              </div>
            </div>
            <div className="row space-between">
              <div className="col-6">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col-6">
                <input type="email" className="form-control" placeholder="Email Id" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <textarea className="form-control" placeholder="Comment"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="button text-right">
                <a href="">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
