import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="about-us">
      <div className="container about-container">
        <div className="about-images">
          <div className="image-left">
            <div className="placeholder-img gray-bg"></div>
          </div>
          <div className="image-right">
            <div className="placeholder-img orange-bg"></div>
            <div className="dots-pattern"></div>
          </div>
        </div>
        <div className="about-content">
          <h4 className="section-subtitle">ABOUT US</h4>
          <h2 className="section-heading">BUILDING RELATIONSHIPS<br/>FORGED IN STEEL</h2>
          
          <p className="about-text">
            Angel Metal India is a leading stockholder, supplier and exporter of 
            a wide range of ferrous and non-ferrous metal products.
          </p>
          <p className="about-text">
            With decades of experience, we are committed to delivering 
            quality products, timely service and long-term value to our 
            customers across the globe.
          </p>
          
          <a href="#about-more" className="btn btn-outline-dark">READ MORE</a>
          
          <div className="watermark-logo">
            {/* Watermark Logo Placeholder */}
            <div className="watermark-a">A</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
