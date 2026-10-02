// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <section className="page-container about-page">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="profile-card">
          {/* Replace with your headshot image in src/assets/ later */}
          <div className="img-placeholder">Headshot Photo</div>
        </div>
        <div className="bio-card">
          <h3>Mikias Haile</h3>
          <p className="bio-text">
            I am a Software Engineering Technology student at Centennial College with a passion for web application 
            development, database design, and intelligent software systems. I specialize in building responsive 
            front-end interfaces in React, scalable back-end components, and data optimization tools.
          </p>
          {/* Link to PDF Resume */}
          <a href="{resumePdf}" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
            View Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
