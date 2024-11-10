// frontend/components/SearchForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";

const SearchForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [distance, setDistance] = useState(''); // Add distance field
  const [budget, setBudget] = useState('');
  const [showFurtherDetails, setShowFurtherDetails] = useState(false);

  const navigate = useNavigate();

  // Calculate budget based on distance when user enters it
  const handleDistanceChange = (e) => {
    const distanceValue = e.target.value;
    setDistance(distanceValue);
    calculateBudget(distanceValue);
  };

  const calculateBudget = (distance) => {
    const ratePerKm = 20; // Example rate per km
    const estimatedBudget = distance * ratePerKm;
    setBudget(estimatedBudget);
  };

  // Handle initial form submission to reveal further details
  const handleMoveForward = (e) => {
    e.preventDefault();
    setShowFurtherDetails(true);
  };

  // Final submission to save trip and navigate to Dashboard
  const handleSubmit = async (e) => {
    e.preventDefault();
    const tripDetails = { from, to, departureDate, returnDate, distance, budget };

    try {
      const response = await axios.post('http://localhost:5000/api/trips', tripDetails);
      console.log('Trip saved:', response.data);
      navigate('/dashboard', { state: { tripDetails: response.data } });
    } catch (error) {
      console.error('Error saving trip:', error);
    }
  };

  return (
    <div className="search-form-container">
      {!showFurtherDetails ? (
        // Step 1: Initial form with only basic details
        <form className="search-form" onSubmit={handleMoveForward}>
          <label htmlFor="from" className="form-label">From:</label>
          <input 
            id="from"
            type="text" 
            value={from} 
            onChange={(e) => setFrom(e.target.value)} 
            placeholder="Enter departure location" 
            required 
            className="search-input"
          />
          <br />

          <label htmlFor="to" className="form-label">To:</label>
          <input 
            id="to"
            type="text" 
            value={to} 
            onChange={(e) => setTo(e.target.value)} 
            placeholder="Enter destination location" 
            required 
            className="search-input"
          />
          <br />

          <label htmlFor="departure-date" className="form-label">Departure Date:</label>
          <input 
            id="departure-date"
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)} 
            required 
            className="search-input"
          />
          <br />

          <label htmlFor="return-date" className="form-label">Return Date:</label>
          <input 
            id="return-date"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)} 
            className="search-input"
          />
          <br />

          <button type="submit" className="search-button">
            Move Forward <span className="arrow-icon">→</span>
          </button>
        </form>
      ) : (
        // Step 2: Further Details with Distance, Budget, and Submit button
        <div className="further-details">
          <h2>Further Details</h2>
          <p>Departure Location: {from}</p>
          <p>Destination Location: {to}</p>
          <p>Departure Date: {departureDate}</p>
          <p>Return Date: {returnDate}</p>

          <label htmlFor="distance" className="form-label">Distance (km):</label>
          <input 
            id="distance"
            type="number" 
            value={distance} 
            onChange={handleDistanceChange} 
            placeholder="Enter distance in km" 
            required 
            className="search-input"
          />
          <br />
          <br/>

          <label htmlFor="budget" className="form-label">Estimated Budget:</label>
          <input 
            id="budget"
            type="number" 
            value={budget} 
            readOnly 
            className="search-input"
          />
          <br />
          <br/>

          <button type="button" className="search-button" onClick={handleSubmit}>
            Submit Trip Details
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
