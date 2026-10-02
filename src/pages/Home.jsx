// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="page-container home-page">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p className="subtitle">Software Engineering Technology Student & Full-Stack Developer</p>
        
        {/* Mission Statement required by Assignment 1 */}
        <div className="mission-box">
          <h2>Mission Statement</h2>
          <p>
            To design and build reliable, efficient, and user-centered software applications by integrating 
            modern web technology, solid architectural principles, and data-driven solutions.
          </p>
        </div>

        {/* Redirect buttons to other pages */}
        <div className="cta-group">
          <Link to="/about" className="btn btn-primary">About Me</Link>
          <Link to="/projects" className="btn btn-secondary">View Projects</Link>
        </div>
      </div>
    </section>
  );
}