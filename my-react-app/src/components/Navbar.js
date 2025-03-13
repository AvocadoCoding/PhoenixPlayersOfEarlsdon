import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Site Logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/bookings">Bookings</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;