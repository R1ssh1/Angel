import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  { id: 0, image: '/img/home/hero.png' },
  { id: 1, image: '/img/home/hero-2.png' },
  { id: 2, image: '/img/home/hero-3.png' }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="hero"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
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
        {slides.map((slide, index) => (
          <span 
            key={slide.id} 
            className={`dot ${index === currentSlide ? 'active' : 'empty'}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
