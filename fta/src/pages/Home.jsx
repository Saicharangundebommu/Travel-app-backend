// frontend/pages/Home.jsx
import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [tripDetails, setTripDetails] = useState(null);

  const handleSearch = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/trips', data);
      setTripDetails(response.data);
      navigate('/dashboard', { state: { tripDetails: response.data } });
    } catch (error) {
      console.error('Error saving trip:', error);
    }
  };

  return (
    <div className="center-container">
      <div className="box">
        <h1>Welcome to Travel Planner</h1>
        <SearchForm onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Home;
