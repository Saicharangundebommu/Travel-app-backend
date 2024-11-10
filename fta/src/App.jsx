// frontend/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import HotelLinks from './components/HotelLinks'; // Import HotelLinks component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<HotelLinks destination="Your Destination" />} /> {/* Route for HotelLinks */}
      </Routes>
    </Router>
  );
}

export default App;
