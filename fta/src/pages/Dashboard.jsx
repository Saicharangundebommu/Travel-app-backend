// frontend/pages/Dashboard.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import "../App.css";

const Dashboard = () => {
  const location = useLocation();
  const { tripDetails } = location.state || {};

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      {tripDetails ? (
        <div className="dashboard-details-box">
          <h3 className="dashboard-heading">Your Trip Details</h3>
          <div className="dashboard-details">
            <p><strong>Departure Location:</strong> {tripDetails.from}</p>
            <p><strong>Destination Location:</strong> {tripDetails.to}</p>
            <p><strong>Departure Date:</strong> {new Date(tripDetails.departureDate).toLocaleDateString()}</p>
            <p><strong>Return Date:</strong> {new Date(tripDetails.returnDate).toLocaleDateString()}</p>
            <p><strong>Budget:</strong> ₹{tripDetails.budget}</p>
          </div>
        </div>
      ) : (
        <p>No trip details available. Please go back and submit your trip information.</p>
      )}
    </div>
  );
};

export default Dashboard;
