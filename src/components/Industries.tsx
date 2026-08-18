import React from 'react';
import { Fuel, Factory, Zap, FlaskConical, Beaker, Building2, Car, Cog } from 'lucide-react';
import './Industries.css';

const industries = [
  { id: 1, name: 'OIL & GAS', icon: <Fuel size={32} /> },
  { id: 2, name: 'PETROCHEMICAL', icon: <Factory size={32} /> },
  { id: 3, name: 'POWER PLANT', icon: <Zap size={32} /> },
  { id: 4, name: 'PHARMACEUTICAL', icon: <FlaskConical size={32} /> },
  { id: 5, name: 'CHEMICAL', icon: <Beaker size={32} /> },
  { id: 6, name: 'CONSTRUCTION', icon: <Building2 size={32} /> },
  { id: 7, name: 'AUTOMOTIVE', icon: <Car size={32} /> },
  { id: 8, name: 'ENGINEERING', icon: <Cog size={32} /> },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="industries">
      <div className="container">
        <h4 className="section-subtitle white">INDUSTRIES WE SERVE</h4>
        
        <div className="industry-grid">
          {industries.map(industry => (
            <div key={industry.id} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h5>{industry.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
