import React from "react";
import Header from "../Header/header";

const IncomeDetailsStep = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-10">
          <h2 className="text-3xl font-bold mb-8 text-center">
            3. Income Details
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              nextStep();
            }}
          >
            <fieldset className="space-y-6">
              <legend className="sr-only">Enter your income details</legend>

              {[
                {
                  label: "Income from Salary",
                  value: formData.income.salary || "",
                  field: "income.salary",
                },
                {
                  label: "Exempt Allowances",
                  value: formData.income.exemptAllowances || "",
                  field: "income.exemptAllowances",
                },
                {
                  label: "Income from Interest",
                  value: formData.income.interestIncome || "",
                  field: "income.interestIncome",
                },
                {
                  label: "Interest on Home Loan (Self occupied)",
                  value: formData.income.interestOnHomeLoanSelf || "",
                  field: "income.interestOnHomeLoanSelf",
                },
                {
                  label: "Rental Income Received",
                  value: formData.income.rentalIncome || "",
                  field: "income.rentalIncome",
                },
                {
                  label: "Interest on Home Loan (Let Out)",
                  value: formData.income.interestOnHomeLoanLetOut || "",
                  field: "income.interestOnHomeLoanLetOut",
                },
                {
                  label: "Income from Digital Assets",
                  value: formData.income.digitalAssetsIncome || "",
                  field: "income.digitalAssetsIncome",
                },
                {
                  label: "Other Income",
                  value: formData.income.otherIncome || "",
                  field: "income.otherIncome",
                },
              ].map(({ label, value, field }) => (
                <div className="relative z-0 w-full" key={field}>
                  <label className="block text-lg font-medium mb-2">
                    {label}
                  </label>
                  <input
                    type="number"
                    value={value}
                    onChange={handleChange(field)}
                    placeholder=" "
                    className="block w-full px-3 py-2 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              ))}
            </fieldset>
            <div className="flex justify-between mt-10">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-6 rounded-lg"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IncomeDetailsStep;
