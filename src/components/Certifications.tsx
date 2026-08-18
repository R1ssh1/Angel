import React from 'react';
import './Certifications.css';

const Certifications: React.FC = () => {
  return (
    <section className="certifications">
      <div className="container">
        <h4 className="section-subtitle white center">OUR CERTIFICATIONS</h4>
        
        <div className="certs-grid">
          <div className="cert-logo">ISO 9001:2015</div>
          <div className="cert-logo">PED CERTIFIED</div>
          <div className="cert-logo">TUV</div>
          <div className="cert-logo">LR</div>
          <div className="cert-logo">EIL</div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
