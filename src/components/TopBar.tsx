import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './TopBar.css';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-container">
        <div className="top-bar-left">
          <span>Quality Metal, Stronger Tomorrow</span>
        </div>
        <div className="top-bar-right">
          <div className="contact-info">
            <a href="tel:+912255546666" className="contact-item">
              <Phone size={14} />
              <span>+91 22 5554 6666</span>
            </a>
            <a href="mailto:info@angelmetal.in" className="contact-item">
              <Mail size={14} />
              <span>info@angelmetal.in</span>
            </a>
          </div>
          <div className="social-links">
            <a href="#" className="social-icon"><FaLinkedinIn size={14} /></a>
            <a href="#" className="social-icon"><FaFacebookF size={14} /></a>
            <a href="#" className="social-icon"><FaInstagram size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
