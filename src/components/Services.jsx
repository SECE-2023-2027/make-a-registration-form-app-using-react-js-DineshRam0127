import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card">
          <h3>Web Design</h3>
          <p>Modern and responsive designs.</p>
        </div>
        <div className="card">
          <h3>SEO</h3>
          <p>Optimize your presence online.</p>
        </div>
        <div className="card">
          <h3>Marketing</h3>
          <p>Reach your audience effectively.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
