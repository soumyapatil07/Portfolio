// src/Components/Home.jsx
import React from 'react';
import './home.css'; // Ensure you create the corresponding CSS file

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="row full-screen">
          <div className="home-content">
            <div className="block">
              <h1>Add life to days, not days to life</h1>
              <h1></h1>
              <div className="cv-btn">
                <a href="soumya.pdf">My CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
