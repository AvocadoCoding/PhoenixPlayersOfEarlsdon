import React from 'react';
import Navbar from '../components/Navbar';
import Map from '../assets/images/Map.png';  // ✅ Import image

function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="page-content" style={{ padding: '1rem' }}>
        <h2>Contact Us</h2>
        <p>
          If you're interested in joining please contact Alan on <a href="tel:07549168791">07549168791</a>.
        </p>

        <p>The group rehearsals and plays are located at the Methodist Church Hall in Earlsdon:</p>
        
        {/* ✅ Semantic postal address */}
        <address style={{ fontStyle: 'normal', lineHeight: '1.6' }}>
          Earlsdon Methodist<br />
          Albany Road<br />
          Earlsdon<br />
          Coventry<br />
          CV5 6NF
        </address>

        {/* ✅ Map image below with extra spacing above */}
        <img 
          src={Map} 
          alt="Map showing location of Methodist Church Hall in Earlsdon" 
          style={{ width: '100%', maxWidth: '600px', marginTop: '2rem', marginBottom: '1rem' }}
        />
      </div>
    </div>
  );
}

export default ContactUs;

