import React, { useState, useEffect } from "react";
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
import Header from "./../Header/header";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SavingsCalculator = () => {
  const [investmentType, setInvestmentType] = useState("mutualFunds");
  const [mutualFundType, setMutualFundType] = useState("lumpsum");
  const [lumpsum, setLumpsum] = useState("");
  const [sip, setSip] = useState("");
  const [rateOfInterest, setRateOfInterest] = useState(12);
  const [investments, setInvestments] = useState([]);
  const [totalFutureValue, setTotalFutureValue] = useState(null);
  const [totalInvested, setTotalInvested] = useState(null);
  const [totalProfit, setTotalProfit] = useState(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    updateRateOfInterest();
  }, [investmentType, mutualFundType]);

  const updateRateOfInterest = () => {
    let rate;
    switch (investmentType) {
      case "mutualFunds":
        rate = 12;
        break;
      case "fixedDeposits":
        rate = 6;
        break;
      case "stocks":
        rate = 10;
        break;
      case "goldBonds":
        rate = 8;
        break;
      case "governmentBonds":
        rate = 7;
        break;
      default:
        rate = 0;
    }
    setRateOfInterest(rate);
  };

  const handleAddInvestment = () => {
    const newInvestment = {
      type: investmentType,
      mutualFundType: mutualFundType,
      lumpsum:
        investmentType === "mutualFunds" && mutualFundType === "sip"
          ? 0
          : parseFloat(lumpsum),
      sip:
        investmentType === "mutualFunds" && mutualFundType === "sip"
          ? parseFloat(sip)
          : 0,
      years: 10,
      rateOfInterest: rateOfInterest,
    };
    setInvestments([...investments, newInvestment]);
    resetFields();
  };

  const resetFields = () => {
    setLumpsum("");
    setSip("");
  };

  const handleCalculate = () => {
    let totalValue = 0;
    let totalInvestment = 0;
    let yearlyDataPoints = Array(10).fill(0);

    investments.forEach((investment) => {
      if (
        investment.type === "mutualFunds" &&
        investment.mutualFundType === "sip"
      ) {
        for (let year = 1; year <= investment.years; year++) {
          const futureValue =
            investment.sip *
            (((Math.pow(1 + investment.rateOfInterest / 100 / 12, 12 * year) -
              1) /
              (investment.rateOfInterest / 100 / 12)) *
              (1 + investment.rateOfInterest / 100 / 12));
          yearlyDataPoints[year - 1] += futureValue;
        }
        totalInvestment += investment.sip * 12 * investment.years;
      } else {
        for (let year = 1; year <= investment.years; year++) {
          const futureValue =
            investment.lumpsum *
            Math.pow(1 + investment.rateOfInterest / 100, year);
          yearlyDataPoints[year - 1] += futureValue;
        }
        totalInvestment += investment.lumpsum;
      }
    });

    totalValue = yearlyDataPoints[yearlyDataPoints.length - 1];

    setTotalFutureValue(totalValue.toFixed(2));
    setTotalInvested(totalInvestment.toFixed(2));
    setTotalProfit((totalValue - totalInvestment).toFixed(2));
    setChartData({
      labels: Array.from({ length: 10 }, (_, i) => `Year ${i + 1}`),
      datasets: [
        {
          label: "Future Value (₹)",
          data: yearlyDataPoints,
          fill: false,
          backgroundColor: "rgba(75,192,192,0.6)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  };

  return (
    <div>
      <Header />

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl font-bold mb-3 text-center">
          GoldenFuture Calculator
        </h1>
        <h1 className="text-xl  mb-6 text-center">
          Visualize Your Savings Growth Year by Year!
        </h1>
        <div className="flex justify-around mb-6">
          {[
            { label: "Mutual Funds", value: "mutualFunds" },
            { label: "Fixed Deposits", value: "fixedDeposits" },
            { label: "Stocks", value: "stocks" },
            { label: "Gold Bonds", value: "goldBonds" },
            { label: "Government Bonds", value: "governmentBonds" },
          ].map((investment) => (
            <button
              key={investment.value}
              className={`p-2 border rounded-md ${
                investmentType === investment.value
                  ? "bg-blue-500 text-white"
                  : "bg-white border-gray-300"
              }`}
              onClick={() => setInvestmentType(investment.value)}
            >
              {investment.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {investmentType === "mutualFunds" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mutual Fund Type:
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={mutualFundType}
                onChange={(e) => setMutualFundType(e.target.value)}
              >
                <option value="lumpsum">Lumpsum</option>
                <option value="sip">SIP</option>
              </select>
            </div>
          )}
          {(investmentType !== "mutualFunds" ||
            mutualFundType === "lumpsum") && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Amount:
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={lumpsum}
                onChange={(e) => setLumpsum(e.target.value)}
                placeholder="Total investment amount"
              />
            </div>
          )}
          {investmentType === "mutualFunds" && mutualFundType === "sip" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SIP (Monthly):
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={sip}
                onChange={(e) => setSip(e.target.value)}
                placeholder="Monthly investment amount"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rate of Interest:
            </label>
            <span className="block p-2 border border-gray-300 rounded-md bg-gray-100">
              {rateOfInterest}%
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700"
            onClick={handleAddInvestment}
          >
            Add Investment
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700"
            onClick={handleCalculate}
          >
            Calculate Total Future Value
          </button>
        </div>
        {totalFutureValue && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold">
              Total Future Value: {formatCurrency(totalFutureValue)}
            </h2>
            <h3 className="text-xl font-bold mt-4">
              Total Amount Invested for 10 years:{" "}
              {formatCurrency(totalInvested)}
            </h3>
            <h3 className="text-xl font-bold mt-2">
              Profit after 10 years: {formatCurrency(totalProfit)}
            </h3>
          </div>
        )}
        <div className="mt-6">
          <h3 className="text-xl font-bold">Investments</h3>
          <ul className="list-disc list-inside">
            {investments.map((investment, index) => (
              <li key={index} className="mt-2">
                {investment.type} ({investment.mutualFundType || "N/A"}):{" "}
                {investment.sip
                  ? `SIP ${formatCurrency(investment.sip)}`
                  : `Lumpsum ${formatCurrency(investment.lumpsum)}`}{" "}
                for {investment.years} years at {investment.rateOfInterest}%
              </li>
            ))}
          </ul>
        </div>
        {chartData.labels && chartData.datasets && (
          <div className="mt-6">
            <h3 className="text-xl font-bold">Future Value Chart</h3>
            <Line data={chartData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SavingsCalculator;
