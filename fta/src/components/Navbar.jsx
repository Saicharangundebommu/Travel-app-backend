// frontend/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const tripDetails = location.state?.tripDetails || {}; // Retrieve trip details if available

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={toggleSidebar}>X</button>
          <div className="sidebar-links">
            <Link className="navbar-link" to="/" onClick={toggleSidebar}>Home</Link>
            <Link className="navbar-link" to="/dashboard" onClick={toggleSidebar}>Dashboard</Link>
            <Link 
              className="navbar-link" 
              to="/bookings" 
              state={{ destination: tripDetails.to }} 
              onClick={toggleSidebar}
            >
              Bookings
            </Link> {/* Pass destination to Bookings */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
