// src/Components/Testimonials.jsx
import React from 'react';
import './Testimonials.css'; // Ensure you create the corresponding CSS file

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <h1>Testimonials</h1>
          </div>
        </div>
        <div className="row">
          <div className="testimonials-content">
            <div className="test-slider">
              <div className="slide first">
                <div className="img">
                  <img style={{ borderRadius: '50%', width: '100%' }} src="/pictures/tobias.jpg" alt="testimonials" />
                </div>
                <div className="text">
                  <p>Frau Patil verfugt uber ein umfassendes und fundiertes Fachwissen, das sie jede rzeit in die Praxis umzusetzen wusste. Sie hat sich innerhalb kurzester Zeit in den ihr gestellten Aufgabenbereich eingearbeitet.Sie verfolgte die vereinbarten Ziele nachhaltig und mit groBem Erfolg. Sie arbeitete stets effizient, zielstrebig und sorgfaltig und bewies ein gutes Organisationsgeschick .Auch in Situationen mit hohem Arbeitsanfa ll erwies sich Sie als sehr belastbare Mitarbeiterin und ging jederzeit uberlegt, ruhig und zielorientiert vor.Ihre Arbeitsergebnisse waren, auch bei wechselnden Anforderungen und unter sehr schwierigen Bedingungen, stets von sehr guter Qualitat.Sie hat unsere Erwartungen stets in jede r Hinsicht erfUllt. Wir waren mit ihren Leistungen jederzeit zufrieden. hr Verhalten gegenuber Vorgesetzten, Kollegen und Externen war stets einwandfrei.</p>
                  <h6>Tobias Lehmann</h6>
                  <p>Managing Director<br />Inopus GMBH</p>
                </div>
              </div>
              <div className="slide one">
                <div className="img">
                  <img style={{ borderRadius: '50%', filter: 'grayscale(100%)', width: '100%' }} src="/pictures/soma.jpg" alt="testimonials" />
                </div>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nobis quidem praesentium earum nulla provident perferendis est doloribus cum nostrum temporibus explicabo amet voluptate maiores ipsam nihil culpa repellat soluta!</p>
                  <h6>Somanagouda Patil</h6>
                  <p>Managing Director<br />Celex.UG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
