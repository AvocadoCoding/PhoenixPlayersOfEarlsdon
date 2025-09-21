import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Redirect old path to the new one */}
          <Route path="/bookings" element={<Navigate to="/tickets" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

