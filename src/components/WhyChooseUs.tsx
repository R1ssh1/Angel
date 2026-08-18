import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './WhyChooseUs.css';

const strengths = [
  'Extensive inventory & ready stock',
  'Stringent quality control',
  'Timely delivery & reliable service',
  'Competitive pricing',
  'Customer-centric approach'
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-choose-us">
      <div className="container why-container">
        <div className="why-image">
          <img src="/symbol.png" alt="Angel Metal India Symbol" className="why-symbol-img" />
        </div>
        
        <div className="why-content">
          <h4 className="section-subtitle white">WHY CHOOSE US</h4>
          <h2 className="section-heading text-white">OUR STRENGTHS</h2>
          
          <ul className="strengths-list">
            {strengths.map((strength, index) => (
              <li key={index}>
                <CheckCircle2 className="check-icon" size={20} />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
          
          <a href="#about" className="btn btn-outline">GET TO KNOW US</a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
