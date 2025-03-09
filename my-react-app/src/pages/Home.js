import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-content" style={{ padding: '1rem', textAlign: 'center' }}>
        <h2>Upcoming Play</h2>
        {/* Add more home page content here */}
      </div>
    </div>
  );
}

export default Home;