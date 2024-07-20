import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./stroopTest.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/header";

function StroopTest() {
  const currencies = useMemo(
    () => [
      { symbol: "$", name: "USD", country: "United States" },
      { symbol: "€", name: "EUR", country: "European Union" },
      { symbol: "¥", name: "JPY", country: "Japan" },
      { symbol: "₹", name: "INR", country: "India" },
      { symbol: "£", name: "GBP", country: "United Kingdom" },
      { symbol: "₩", name: "KRW", country: "South Korea" },
    ],
    []
  );

  const [round, setRound] = useState(1);
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState({
    symbol: "",
    name: "",
    country: "",
  });
  const [showInstructions, setShowInstructions] = useState(true);

  const navigate = useNavigate();

  const startRound = useCallback(() => {
    const randomCurrencyIndex = Math.floor(Math.random() * currencies.length);
    setCurrentCurrency(currencies[randomCurrencyIndex]);
  }, [currencies]);

  useEffect(() => {
    if (start && round <= 8) {
      startRound();
    }
  }, [round, start, startRound]);

  const startOver = () => {
    setStart(true);
    setRound(1);
    setScore(0);
    setShowInstructions(false);
  };

  const handleOptionClick = (country) => {
    if (country === currentCurrency.country) {
      setScore(score + 1);
    }
    if (round < 8) {
      setRound(round + 1);
    } else {
      setRound(9); // Round 9 is for displaying final score and buttons
    }
  };

  const handleSubmit = () => {
    navigate("/result", { state: { score, currentCurrency } });
  };

  return (
    <div>
      <Header />
      <div className="stroop-test">
        {showInstructions ? (
          <div className="instructions">
            <h1>Instructions</h1>
            <ul>
              <li>
                Select the correct country for the displayed currency symbol.
              </li>
              <li>There will be 8 rounds. Try to score as high as possible.</li>
            </ul>
            <button
              className="high"
              onClick={() => {
                setShowInstructions(false);
                setStart(true);
              }}
            >
              Start Test
            </button>
          </div>
        ) : start ? (
          <div className="test-div">
            {round <= 8 ? (
              <>
                <h1 className="head">Guess the Country</h1>
                <h2>Round {round}/8</h2>
                <div className="current">{currentCurrency.symbol}</div>
                <div className="btns">
                  {currencies.map((currency, index) => (
                    <button
                      className="next"
                      key={index}
                      onClick={() => handleOptionClick(currency.country)}
                    >
                      {currency.country}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="btn-test">
                <h2>Final Score: {score}/8</h2>
                <div>
                  <button className="start" onClick={startOver}>
                    Start Over
                  </button>
                  <button className="submit" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="background">
            <button className="high" onClick={() => setShowInstructions(true)}>
              Start Test
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StroopTest;
