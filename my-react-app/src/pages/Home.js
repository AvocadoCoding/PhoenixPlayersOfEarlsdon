import React from 'react';
import Navbar from '../components/Navbar';


function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-content" style={{ padding: '1rem', textAlign: 'center' }}>
        <h2>Upcoming Play</h2>
        <p>*Play synopsis*</p>
        <p>*Play poster*</p>
        {/* Add more home page content here */}
      </div>
    </div>
  );
}

export default Home;