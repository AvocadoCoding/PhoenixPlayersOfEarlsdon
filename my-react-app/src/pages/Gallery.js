import React from 'react';
import Navbar from '../components/Navbar';

function Gallery() {
  return (
    <div>
      <Navbar />
      <div className="page-content" style={{ padding: '1rem' }}>
        <h2>Gallery</h2>
        <p>Below are a few photographs from previous plays- if you visit our stage on a performance night, you will see photograph boards of all of our plays from over the years!</p>
      </div>
    </div>
  );
}

export default Gallery;
