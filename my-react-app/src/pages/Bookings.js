import React from 'react';
import Navbar from '../components/Navbar';

function Bookings() {
  return (
    <div>
      <Navbar />
      <div className="page-content" style={{ padding: '1rem' }}>
        <h2>Bookings</h2>
        <p>Tickets £10 on the door. Please note we are only able to accept cash at this time.</p>

        <p>Play runs from Wednesday 29th October to Friday 31st October.</p>

        <p>Doors open at 7pm, curtain at 7.30pm.</p>

        <p>To reserve tickets please call 07970484925 / 07977799128</p>
      </div>
    </div>
  );
}

export default Bookings;
