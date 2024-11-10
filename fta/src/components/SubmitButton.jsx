// frontend/components/SubmitButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitButton = ({ tripDetails }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Pass trip details as state when navigating to /dashboard
    navigate('/dashboard', { state: { tripDetails } });
  };

  return (
    <button onClick={handleClick} className="submit-button">
      Submit Trip Details
    </button>
  );
};

export default SubmitButton;
