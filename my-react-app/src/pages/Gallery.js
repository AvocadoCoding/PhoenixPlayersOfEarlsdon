import React from 'react';
import Navbar from '../components/Navbar';

function Gallery() {
  return (
    <div>
      <Navbar />
      <div className="page-content" style={{ padding: '1rem' }}>
        <h2>Gallery</h2>
        <p>Gallery content will go here.</p>
      </div>
    </div>
  );
}

export default Gallery;
