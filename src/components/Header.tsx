import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <a href="#" className="logo-link">
            <img src="/symbol.png" alt="Angel Metal India Symbol" className="header-logo-img" />
            <img src="/text.png" alt="Angel Metal India Text" className="header-text-img" />
          </a>
        </div>
        <nav className="main-nav">
          <ul>
            <li className="active"><a href="#">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#products">PRODUCTS</a></li>
            <li><a href="#industries">INDUSTRIES</a></li>
            <li><a href="#quality">QUALITY</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
        <div className="header-action">
          <a href="#quote" className="btn btn-primary">GET A QUOTE</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
