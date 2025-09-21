import React from 'react';
import Navbar from '../components/Navbar';
import PosterImg from '../assets/images/Poster.jpg';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-content" style={{ padding: '1rem', textAlign: 'center' }}>
        <h2>'Forget me Knot'- Coming 29th to 31st October</h2>
        <p>
          Robert Zeinfeld is found wandering the streets of Leicester at 4 a.m. There's no clue how he got there, 
          just a bruised head and a suspicious policeman for company. But ... has he lost his memory; 
          or is it all an elaborate cover-up …
        </p>

        {/* Poster image */}
        <img 
          src={PosterImg} 
          alt="Forget me Knot Poster" 
          style={{ maxWidth: '80%', height: 'auto', marginTop: '1rem', borderRadius: '8px' }} 
        />
      </div>
    </div>
  );
}

export default Home;
