import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-white">ANGEL</span>
            <span className="logo-red"> METAL INDIA</span>
          </div>
          <p className="footer-desc">
            Delivering quality metal solutions with trust, transparency and timely service.
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebookF size={16} /></a>
            <a href="#"><FaLinkedinIn size={16} /></a>
            <a href="#"><FaInstagram size={16} /></a>
          </div>
        </div>
        
        <div className="footer-col links-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#quality">Quality</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-col links-col">
          <h4>PRODUCTS</h4>
          <ul>
            <li><a href="#">Pipes & Tubes</a></li>
            <li><a href="#">Fittings & Flanges</a></li>
            <li><a href="#">Plates & Sheets</a></li>
            <li><a href="#">Bars & Rods</a></li>
            <li><a href="#">Structural</a></li>
            <li><a href="#">Raw Materials</a></li>
          </ul>
        </div>
        
        <div className="footer-col contact-col">
          <h4>CONTACT US</h4>
          <ul className="contact-list">
            <li>
              <MapPin size={16} className="contact-icon" />
              <span>
                Angel Metal India<br/>
                B-108, Lancelot Majestic,<br/>
                P. J. Lalan Marg,<br/>
                Chembur (W), Mumbai - 400043,<br/>
                Maharashtra, India.
              </span>
            </li>
            <li>
              <Phone size={16} className="contact-icon" />
              <span>+91 22 5554 6666</span>
            </li>
            <li>
              <Mail size={16} className="contact-icon" />
              <span>info@angelmetal.in<br/>www.angelmetal.in</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; 2024 Angel Metal India. All Rights Reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
