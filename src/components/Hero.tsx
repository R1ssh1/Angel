import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            STRENGTH<br />
            IN EVERY FORM.<br />
            <span className="text-red">TRUST IN EVERY DEAL.</span>
          </h1>
          <p className="hero-subtitle">
            Premium quality metal products and<br />
            solutions for a stronger tomorrow.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">OUR PRODUCTS</a>
            <a href="#quote" className="btn btn-outline">GET A QUOTE</a>
          </div>
        </div>
      </div>
      <div className="hero-pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot empty"></span>
      </div>
    </section>
  );
};

export default Hero;
