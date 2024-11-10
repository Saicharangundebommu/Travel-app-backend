// frontend/components/BudgetCalculator.jsx
import React, { useState } from 'react';
import "../App.css";

const BudgetCalculator = () => {
  const [budget, setBudget] = useState(0);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setBudget(value);
  };

  return (
    <div className="budget-calculator-box">
      <h2>Estimated Budget</h2>
      <input
        type="number"
        placeholder="Enter budget"
        value={budget}
        onChange={handleInputChange}
      />
      <p>Total: ₹{budget}</p>
    </div>
  );
};

export default BudgetCalculator;
