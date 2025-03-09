import React from 'react';
import Navbar from '../components/Navbar';

function Bookings() {
  return (
    <div>
      <Navbar />
      <div className="page-content" style={{ padding: '1rem' }}>
        <h2>Bookings</h2>
        <p>Booking details and forms will go here.</p>
      </div>
    </div>
  );
}

export default Bookings;
