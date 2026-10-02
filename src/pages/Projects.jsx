import React from 'react';
import headshotImg from '../assets/projectspic.jpg';
import projectsPdf from '../assets/projects.pdf';

export default function Projects() {
  return (
    <section className="page-container about-page">
      <h2>Projects</h2>
      <div className="about-grid">
        <div className="profile-card">
          <img src={headshotImg} alt="Mikias Haile" className="profile-img" />
        </div>
        <div className="bio-card">
          <h3>Mikias Haile</h3>
          <p className="bio-text">
            I am a Software Engineering Technology student at Centennial College with a passion for web application development, database design, and intelligent software systems. I specialize in building responsive front-end interfaces in React, scalable back-end components, and data optimization tools.
          </p>
          <a href={projectsPdf} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
            View Projects (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}