import React from 'react';
import './Result.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/games');
  };

  const getInterpretation = () => {
    if (score >= 1 && score <= 5) {
      return "You did well, but there's room for improvement!";
    } else if (score >= 6 && score <= 10) {
      return 'Excellent job! You have a strong attention to detail and skilled processing speed and inhibitory impulses.';
    } else {
      return 'Invalid score range'; // Handle unexpected score values
    }
  };

  return (
    <div className="result-page">
      <h1 className="result-heading">Finance fortune Results</h1>
      <div className="score-section">
        <h2>Your Score: {score}/10</h2>
        <p className='interpretation'>{getInterpretation()}</p>
      </div>
      <div>
        <button className="back-to-home" onClick={handleSubmit}>Back to Home</button>
      </div>
    </div>
  );
}

export default Result;
