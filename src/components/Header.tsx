import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src="/symbol.png" alt="Angel Metal India Symbol" className="header-logo-img" />
            <img src="/text.png" alt="Angel Metal India Text" className="header-text-img" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/about">ABOUT US</NavLink></li>
            <li><NavLink to="/products">PRODUCTS</NavLink></li>
            <li><NavLink to="/industries">INDUSTRIES</NavLink></li>
            <li><NavLink to="/quality">QUALITY</NavLink></li>
            <li><NavLink to="/contact">CONTACT US</NavLink></li>
          </ul>
        </nav>
        <div className="header-action">
          <Link to="/contact" className="btn btn-primary">GET A QUOTE</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
