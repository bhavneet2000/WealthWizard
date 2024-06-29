import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Header from "../Header/header";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const InflationCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [inflationRate, setInflationRate] = useState(0);
  const [years, setYears] = useState(0);
  const [futureValue, setFutureValue] = useState(null);
  const [graphData, setGraphData] = useState(null);

  const calculateFutureValue = (e) => {
    e.preventDefault();
    const rate = inflationRate / 100;
    const fv = amount * Math.pow(1 + rate, years);
    setFutureValue(fv.toFixed(2));

    // Generate data for graph
    let yearlyValues = [];
    for (let i = 0; i <= years; i++) {
      yearlyValues.push(amount * Math.pow(1 + rate, i));
    }
    setGraphData({
      labels: Array.from({ length: years + 1 }, (_, i) => i),
      datasets: [
        {
          label: "Future Value Over Time",
          data: yearlyValues,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    });
  };

  return (
    <div className="bg-teal-50 min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center py-10">
        <header className="text-center p-6 text-blue-800 w-full text-4xl">
          <h1 className="text-3xl font-bold">Inflation Calculator</h1>
        </header>
        <main className="flex flex-col items-center p-6 bg-white rounded shadow-md mt-6 w-full max-w-2xl">
          <form
            onSubmit={calculateFutureValue}
            className="flex flex-col items-center space-y-6 w-full"
          >
            <div className="flex flex-col w-full">
              <label className="font-semibold mb-2">Initial Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                required
                className="border px-3 py-2 rounded shadow-sm w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-semibold mb-2">
                Annual Inflation Rate (%):
              </label>
              <input
                type="number"
                value={inflationRate}
                onChange={(e) => setInflationRate(Number(e.target.value))}
                required
                className="border px-3 py-2 rounded shadow-sm w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-semibold mb-2">Number of Years:</label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                required
                className="border px-3 py-2 rounded shadow-sm w-full"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Calculate
            </button>
          </form>
          {futureValue !== null && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded w-full text-center">
              <h2 className="text-xl font-bold">Future Value: {futureValue}</h2>
            </div>
          )}
          {graphData && (
            <div className="mt-6 w-full max-w-3xl">
              <Line
                data={graphData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      title: {
                        display: true,
                        text: "Years",
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: "Value",
                      },
                    },
                  },
                }}
                height={400}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default InflationCalculator;
