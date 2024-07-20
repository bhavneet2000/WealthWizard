import React from "react";
import Header from "../Header/header";

const AgeStep = ({ nextStep, prevStep, handleChange }) => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">2. Your Age</h2>
          <div className="flex flex-col space-y-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="age"
                value="0-60"
                onChange={handleChange("age")}
                required
                className="mr-2"
              />
              <span className="text-lg">0 to 60</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="age"
                value="60-80"
                onChange={handleChange("age")}
                required
                className="mr-2"
              />
              <span className="text-lg">60 to 80</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="age"
                value="80+"
                onChange={handleChange("age")}
                required
                className="mr-2"
              />
              <span className="text-lg">80 & above</span>
            </label>
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
            >
              Back
            </button>
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

export default AgeStep;
