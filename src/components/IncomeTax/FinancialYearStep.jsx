import React from "react";
import Header from "./../Header/header";

const FinancialYearStep = ({ nextStep, handleChange }) => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            1. Financial Year
          </h2>
          <div className="mb-6">
            <label className="block mb-4">
              <input
                type="radio"
                name="financialYear"
                value="2024-2025"
                onChange={handleChange("financialYear")}
                required
                className="mr-2"
              />
              <span className="text-lg">
                FY 2024-2025 (Return to be filed between 1st April 2025 - 31st
                March 2026)
              </span>
            </label>
            <label className="block mb-4">
              <input
                type="radio"
                name="financialYear"
                value="2023-2024"
                onChange={handleChange("financialYear")}
                required
                className="mr-2"
              />
              <span className="text-lg">
                FY 2023-2024 (Return to be filed between 1st April 2024 - 31st
                March 2025)
              </span>
            </label>
          </div>
          <div className="flex justify-end">
            <button
              onClick={nextStep}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialYearStep;
