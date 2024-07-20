import React from "react";
import Header from "../Header/header";

const DeductionsStep = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">4. Deductions</h2>

          <div className="space-y-4">
            <div>
              <label className="block mb-2">
                Basic Deductions (80C):
                <input
                  type="number"
                  value={formData.deductions.basicDeductions}
                  onChange={handleChange("deductions.basicDeductions")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Interest from Deposits (80TTA):
                <input
                  type="number"
                  value={formData.deductions.interestFromDeposits}
                  onChange={handleChange("deductions.interestFromDeposits")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Medical Insurance (80D):
                <input
                  type="number"
                  value={formData.deductions.medicalInsurance}
                  onChange={handleChange("deductions.medicalInsurance")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Donations to Charity (80G):
                <input
                  type="number"
                  value={formData.deductions.charityDonations}
                  onChange={handleChange("deductions.charityDonations")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Interest on Educational Loan (80E):
                <input
                  type="number"
                  value={formData.deductions.educationLoanInterest}
                  onChange={handleChange("deductions.educationLoanInterest")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Interest on Housing Loan (80EEA):
                <input
                  type="number"
                  value={formData.deductions.housingLoanInterest}
                  onChange={handleChange("deductions.housingLoanInterest")}
                  className="form-input block w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Employee's contribution to NPS (80CCD):
                <input
                  type="number"
                  value={formData.deductions.npsContribution}
                  onChange={handleChange("deductions.npsContribution")}
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

export default DeductionsStep;
