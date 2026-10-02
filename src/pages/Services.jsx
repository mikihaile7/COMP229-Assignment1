// src/pages/Services.jsx
import React from 'react';

export default function Services() {
  const serviceList = [
    {
      id: 1,
      title: 'Web Application Development',
      description: 'Building modern, responsive user interfaces with React, JavaScript, HTML5, and CSS3.'
    },
    {
      id: 2,
      title: 'Data Analysis & Optimization',
      description: 'Developing data pipelines, linear optimization models, and interactive dashboard analytics in Python.'
    },
    {
      id: 3,
      title: 'Database Architecture & SQL',
      description: 'Designing relational database schemas, multi-table queries, and database normalization solutions.'
    }
  ];

  return (
    <section className="page-container services-page">
      <h2>Services Offered</h2>
      <div className="cards-grid">
        {serviceList.map((service) => (
          <div key={service.id} className="service-card">
            <div className="img-placeholder">Service Graphic</div>
            <div className="card-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}