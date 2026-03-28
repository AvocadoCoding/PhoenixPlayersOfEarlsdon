import React from 'react';
import Navbar from '../components/Navbar';

function Tickets() {
  return (
    <div>
      <Navbar />
      <div className="page-content" style={{ padding: '1rem' }}>
        <h2>Tickets</h2>
        <p>Tickets £10 on the door. Please note we are only able to accept cash at this time.</p>

        <p>Play runs from Wednesday 29th April to Friday 1st May.</p>

        <p>Wednesday and Friday- Doors 7pm and curtain at 7.30pm.</p>
        <p>Thursday- Doors 7.15pm and curtain at 7.45pm.</p>

        <p>To reserve tickets please call 07977799128 / 07549168791</p>
      </div>
    </div>
  );
}

export default Tickets;
