import React from "react";
import Header from "../Header/header";

const IncomeDetailsStep = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div>
      <Header />

      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            3. Income Details
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block mb-2">
                Income from Salary:
                <input
                  type="number"
                  value={formData.income.salary}
                  onChange={handleChange("income.salary")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Exempt Allowances:
                <input
                  type="number"
                  value={formData.income.exemptAllowances}
                  onChange={handleChange("income.exemptAllowances")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Income from Interest:
                <input
                  type="number"
                  value={formData.income.interestIncome}
                  onChange={handleChange("income.interestIncome")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Interest on Home Loan (Self occupied):
                <input
                  type="number"
                  value={formData.income.interestOnHomeLoanSelf}
                  onChange={handleChange("income.interestOnHomeLoanSelf")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Rental Income Received:
                <input
                  type="number"
                  value={formData.income.rentalIncome}
                  onChange={handleChange("income.rentalIncome")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Interest on Home Loan (Let Out):
                <input
                  type="number"
                  value={formData.income.interestOnHomeLoanLetOut}
                  onChange={handleChange("income.interestOnHomeLoanLetOut")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Income from Digital Assets:
                <input
                  type="number"
                  value={formData.income.digitalAssetsIncome}
                  onChange={handleChange("income.digitalAssetsIncome")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Other Income:
                <input
                  type="number"
                  value={formData.income.otherIncome}
                  onChange={handleChange("income.otherIncome")}
                  className="form-input block w-full mt-1"
                />
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
    </div>
  );
};

export default IncomeDetailsStep;
