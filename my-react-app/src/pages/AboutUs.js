import React from 'react';
import Navbar from '../components/Navbar';

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="page-content" style={{ padding: '1rem' }}>
        <h2>About Us</h2>
        <p>Information about organisation will go here.</p>
      </div>
    </div>
  );
}

export default AboutUs;
