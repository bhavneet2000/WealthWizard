import React, { useState } from 'react';

const Investment = () => {
  const [startingValue, setStartingValue] = useState('');
  const [futureValue, setFutureValue] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [yearsRequired, setYearsRequired] = useState('');
  const [monthsRequired, setMonthsRequired] = useState('');
  const [daysRequired, setDaysRequired] = useState('');

  const calculateInvestmentTime = () => {
    const start = parseFloat(startingValue);
    const future = parseFloat(futureValue);
    const rate = parseFloat(annualInterestRate) / 100;

    if (start >= future) {
      alert("Starting value must be less than the future value.");
      return;
    }

    const years = Math.floor(Math.log(future / start) / Math.log(1 + rate));
    const remainingValue = start * Math.pow(1 + rate, years);
    const months = Math.floor((Math.log(future / remainingValue)) / Math.log(1 + rate / 12));
    const days = Math.ceil((Math.log(future / (remainingValue * (1 + rate / 12) ** months))) / Math.log(1 + rate / 365));

    setYearsRequired(years);
    setMonthsRequired(months);
    setDaysRequired(days);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Investment Time Calculator</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-lg font-bold mb-4 text-center">Calculator</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Starting Value:</label>
              <input type="number" value={startingValue} onChange={(e) => setStartingValue(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter starting value" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Future Value:</label>
              <input type="number" value={futureValue} onChange={(e) => setFutureValue(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter future value" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Annual Interest Rate (%):</label>
              <input type="number" value={annualInterestRate} onChange={(e) => setAnnualInterestRate(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter annual interest rate" />
            </div>
            <div className="flex items-center justify-center">
              <button onClick={calculateInvestmentTime} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">Calculate</button>
            </div>
          </div>
          {yearsRequired !== '' && (
            <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8">
              <h2 className="text-lg font-bold mb-4 text-center p-5">Investment Time Summary</h2>
              <p className="text-center text-xl">Years Required: {yearsRequired}</p>
              <p className="text-center text-xl">Months Required: {monthsRequired}</p>
              <p className="text-center text-xl">Days Required: {daysRequired}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Investment;
