// frontend/components/HotelLinks.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import "../App.css";

const HotelLinks = () => {
  const location = useLocation();
  const { destination } = location.state || {}; // Get destination from state

  return (
    <div className="hotel-links-container">
      <h2>Hotels in {destination || "your destination"}</h2> {/* Fallback in case destination is undefined */}
      <ul>
        <li>
          <a href="https://booking.com" target="_blank" rel="noopener noreferrer">Booking.com</a>
        </li>
        <li>
          <a href="https://hotels.com" target="_blank" rel="noopener noreferrer">Hotels.com</a>
        </li>
      </ul>
    </div>
  );
};

export default HotelLinks;
