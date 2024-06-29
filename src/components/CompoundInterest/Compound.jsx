import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Header from "../Header/header";

const Compound = () => {
  const [startingBalance, setStartingBalance] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [compoundInterval, setCompoundInterval] = useState(12); // Default to monthly
  const [duration, setDuration] = useState("");
  const [durationType, setDurationType] = useState("years"); // Default to years
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);

  const calculateCompoundInterest = () => {
    const rate = annualInterestRate / 100;
    const periods =
      durationType === "years" ? duration * compoundInterval : duration;
    const data = [];
    let balance = parseFloat(startingBalance);
    for (let i = 1; i <= periods; i++) {
      balance *= 1 + rate / compoundInterval;
      data.push({ year: i, value: balance.toFixed(2) });
    }
    setResult(balance.toFixed(2));
    setChartData(data);
  };

  return (
    <div className="min-h-screen bg-teal-50">
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800 overflow-hidden">
          Compound Interest Calculator
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
              Calculator
            </h2>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Starting Balance:
              </label>
              <input
                type="number"
                value={startingBalance}
                onChange={(e) => setStartingBalance(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter starting balance"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Annual Interest Rate (%):
              </label>
              <input
                type="number"
                value={annualInterestRate}
                onChange={(e) => setAnnualInterestRate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter annual interest rate"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Compound Interval:
              </label>
              <select
                value={compoundInterval}
                onChange={(e) => setCompoundInterval(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value={12}>Monthly</option>
                <option value={4}>Quarterly</option>
                <option value={2}>Semi-Annually</option>
                <option value={1}>Annually</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Duration:
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter duration"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Duration Type:
              </label>
              <select
                value={durationType}
                onChange={(e) => setDurationType(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="years">Years</option>
                <option value="months">Months</option>
              </select>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={calculateCompoundInterest}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Calculate
              </button>
            </div>
          </div>
          {result && (
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
                Result
              </h2>
              <p className="text-center text-lg mb-6">
                Compound Interest Result:{" "}
                <span className="font-bold">{result}</span>
              </p>
              <div className="flex justify-center">
                <BarChart width={500} height={300} data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="year"
                    label={{
                      value: "Time Period",
                      position: "insideBottom",
                      offset: -10,
                      dy: 25, // Adjusts vertical alignment
                    }}
                  />
                  <YAxis
                    label={{
                      value: "Balance",
                      angle: -90,
                      position: "insideLeft",
                      dy: 15, // Adjusts horizontal alignment
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Compound;
