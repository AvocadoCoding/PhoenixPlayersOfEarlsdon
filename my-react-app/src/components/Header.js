import React from 'react';
import headerImage from '../assets/images/Header.png'; 
import './Header.css';

function Header() {
  return (
    <header
      className="site-header"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="header-content">
      <h1 style={{ color: '#FFEFD5' }}>Phoenix Players Earlsdon</h1>
      </div>
    </header>
  );
}

export default Header;