import React from "react";
import Header from "../Header/header";

const Summary = ({ prevStep, formData }) => {
  const calculateNewRegimeTax = (taxableIncome) => {
    let tax = 0;
    if (taxableIncome <= 250000) return 0;
    else if (taxableIncome <= 500000) return (taxableIncome - 250000) * 0.05;
    else if (taxableIncome <= 750000)
      return 12500 + (taxableIncome - 500000) * 0.1;
    else if (taxableIncome <= 1000000)
      return 37500 + (taxableIncome - 750000) * 0.15;
    else if (taxableIncome <= 1250000)
      return 75000 + (taxableIncome - 1000000) * 0.2;
    else return 125000 + (taxableIncome - 1250000) * 0.25;
  };

  const calculateOldRegimeTax = (taxableIncome) => {
    let tax = 0;
    if (taxableIncome <= 250000) return 0;
    else if (taxableIncome <= 500000) return (taxableIncome - 250000) * 0.05;
    else if (taxableIncome <= 1000000)
      return 12500 + (taxableIncome - 500000) * 0.2;
    else return 112500 + (taxableIncome - 1000000) * 0.3;
  };

  const calculateTaxableIncome = () => {
    const totalIncome = Object.values(formData.income).reduce(
      (acc, curr) => acc + Number(curr),
      0
    );
    const totalDeductions = Object.values(formData.deductions).reduce(
      (acc, curr) => acc + Number(curr),
      0
    );
    return totalIncome - totalDeductions;
  };

  const taxableIncome = calculateTaxableIncome();
  const taxNewRegime = calculateNewRegimeTax(taxableIncome);
  const taxOldRegime = calculateOldRegimeTax(taxableIncome);

  const recommendation =
    taxOldRegime > taxNewRegime
      ? `You should opt for the New Regime as it will provide you a benefit of ₹${(
          taxOldRegime - taxNewRegime
        ).toLocaleString()} over the Old Regime.`
      : `You should opt for the Old Regime as it is more beneficial for you.`;

  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Summary</h2>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Income Details</h3>
            <ul className="list-disc list-inside">
              <li>Income from Salary: ₹{formData.income.salary}</li>
              <li>Exempt Allowances: ₹{formData.income.exemptAllowances}</li>
              <li>Income from Interest: ₹{formData.income.interestIncome}</li>
              <li>
                Interest on Home Loan (Self occupied): ₹
                {formData.income.interestOnHomeLoanSelf}
              </li>
              <li>Rental Income Received: ₹{formData.income.rentalIncome}</li>
              <li>
                Interest on Home Loan (Let Out): ₹
                {formData.income.interestOnHomeLoanLetOut}
              </li>
              <li>
                Income from Digital Assets: ₹
                {formData.income.digitalAssetsIncome}
              </li>
              <li>Other Income: ₹{formData.income.otherIncome}</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Deductions</h3>
            <ul className="list-disc list-inside">
              <li>
                Basic Deductions (80C): ₹{formData.deductions.basicDeductions}
              </li>
              <li>
                Interest from Deposits (80TTA): ₹
                {formData.deductions.interestFromDeposits}
              </li>
              <li>
                Medical Insurance (80D): ₹{formData.deductions.medicalInsurance}
              </li>
              <li>
                Donations to Charity (80G): ₹
                {formData.deductions.charityDonations}
              </li>
              <li>
                Interest on Educational Loan (80E): ₹
                {formData.deductions.educationLoanInterest}
              </li>
              <li>
                Interest on Housing Loan (80EEA): ₹
                {formData.deductions.housingLoanInterest}
              </li>
              <li>
                Employee's contribution to NPS (80CCD): ₹
                {formData.deductions.npsContribution}
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Tax Summary</h3>
            <p className="mb-2">
              Taxable Income: ₹{taxableIncome.toLocaleString()}
            </p>
            <p className="mb-2">
              Tax under New Regime: ₹{taxNewRegime.toLocaleString()}
            </p>
            <p className="mb-2">
              Tax under Old Regime: ₹{taxOldRegime.toLocaleString()}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Recommendation</h3>
            <p>{recommendation}</p>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
