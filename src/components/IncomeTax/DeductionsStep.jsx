import React from "react";
import Header from "../Header/header";

const DeductionsStep = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-10">
          <h2 className="text-3xl font-bold mb-8 text-center">4. Deductions</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              nextStep();
            }}
          >
            <fieldset className="space-y-6">
              <legend className="sr-only">Enter your deduction details</legend>

              {[
                {
                  label: "Basic Deductions (80C)",
                  value: formData.deductions.basicDeductions || "",
                  field: "deductions.basicDeductions",
                },
                {
                  label: "Interest from Deposits (80TTA)",
                  value: formData.deductions.interestFromDeposits || "",
                  field: "deductions.interestFromDeposits",
                },
                {
                  label: "Medical Insurance (80D)",
                  value: formData.deductions.medicalInsurance || "",
                  field: "deductions.medicalInsurance",
                },
                {
                  label: "Donations to Charity (80G)",
                  value: formData.deductions.charityDonations || "",
                  field: "deductions.charityDonations",
                },
                {
                  label: "Interest on Educational Loan (80E)",
                  value: formData.deductions.educationLoanInterest || "",
                  field: "deductions.educationLoanInterest",
                },
                {
                  label: "Interest on Housing Loan (80EEA)",
                  value: formData.deductions.housingLoanInterest || "",
                  field: "deductions.housingLoanInterest",
                },
                {
                  label: "Employee's contribution to NPS (80CCD)",
                  value: formData.deductions.npsContribution || "",
                  field: "deductions.npsContribution",
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

export default DeductionsStep;
