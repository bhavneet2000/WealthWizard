import React, { useState } from "react";
import Header from "../Header/header";

const Retirement = () => {
  const [age, setAge] = useState("");
  const [monthlySpending, setMonthlySpending] = useState("");
  const [retirementType, setRetirementType] = useState("");
  const [savingStrategy, setSavingStrategy] = useState("");
  const [results, setResults] = useState(null);

  const formatIndianNumber = (number) => {
    return number.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateRetirement(
      age,
      monthlySpending,
      retirementType,
      savingStrategy
    );
    setResults(result);
  };

  const calculateRetirement = (
    age,
    monthlySpending,
    retirementType,
    savingStrategy
  ) => {
    const currentAge = parseInt(age);
    const monthlyExpense = parseFloat(monthlySpending);

    let annualMultiplier;
    switch (retirementType) {
      case "king":
        annualMultiplier = 1.5;
        break;
      case "happy":
        annualMultiplier = 1;
        break;
      case "monk":
        annualMultiplier = 0.5;
        break;
      default:
        annualMultiplier = 1;
    }

    let savingsMultiplier;
    switch (savingStrategy) {
      case "aggressive":
        savingsMultiplier = 1.2;
        break;
      case "safe":
        savingsMultiplier = 1;
        break;
      default:
        savingsMultiplier = 1;
    }

    const yearsToRetirement = 60 - currentAge; // Assuming retirement age is 60
    const annualExpense = monthlyExpense * 12 * annualMultiplier;
    const totalAmountRequired = annualExpense * 25;

    const monthlySavingsRequired =
      totalAmountRequired / (yearsToRetirement * 12);

    return {
      totalAmountRequired: Math.round(totalAmountRequired),
      monthlySavingsRequired: Math.round(
        monthlySavingsRequired * savingsMultiplier
      ),
    };
  };

  return (
    <div>
      <Header />
      <div className="bg-teal-50 min-h-screen flex justify-center items-center">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-700 overflow-hidden">
            WealthWizard Retirement Calculator
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xl">How old are you?</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-xl">
                How much do you spend per month (in Rupees)?
              </label>
              <input
                type="number"
                value={monthlySpending}
                onChange={(e) => setMonthlySpending(e.target.value)}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-xl">
                What kind of retirement do you want?
              </label>
              <select
                value={retirementType}
                onChange={(e) => setRetirementType(e.target.value)}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              >
                <option value="">Select</option>
                <option value="king">Like a King</option>
                <option value="happy">I am happy the way I am</option>
                <option value="monk">Like a Monk</option>
              </select>
            </div>
            <div>
              <label className="block text-xl">
                Where are you saving for your retirement?
              </label>
              <select
                value={savingStrategy}
                onChange={(e) => setSavingStrategy(e.target.value)}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              >
                <option value="">Select</option>
                <option value="safe">Safe (Includes PF, FD, etc.)</option>
                <option value="aggressive">
                  Aggressive (Includes Mutual funds, equity, etc.)
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Calculate
            </button>
          </form>
          {results && (
            <div className="mt-8">
              <h2 className="text-xl font-bold">Results</h2>
              <p>
                Total Amount Required for Retirement: ₹{" "}
                {formatIndianNumber(results.totalAmountRequired)}
              </p>
              <p>
                Monthly Savings Required: ₹{" "}
                {formatIndianNumber(results.monthlySavingsRequired)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Retirement;
