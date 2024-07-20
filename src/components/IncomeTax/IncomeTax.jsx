import React, { useState } from "react";
import FinancialYearStep from "./FinancialYearStep";
import AgeStep from "./AgeStep";
import IncomeDetailsStep from "./IncomeDetailsStep";
import DeductionsStep from "./DeductionsStep";
import Summary from "./Summary";

const IncomeTax = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    financialYear: "",
    age: "",
    income: {
      salary: 0,
      exemptAllowances: 0,
      interestIncome: 0,
      interestOnHomeLoanSelf: 0,
      rentalIncome: 0,
      interestOnHomeLoanLetOut: 0,
      digitalAssetsIncome: 0,
      otherIncome: 0,
    },
    deductions: {
      basicDeductions: 0,
      interestFromDeposits: 0,
      medicalInsurance: 0,
      charityDonations: 0,
      educationLoanInterest: 0,
      housingLoanInterest: 0,
      npsContribution: 0,
    },
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    const keys = input.split(".");
    setFormData((prevState) => {
      const newState = { ...prevState };
      let current = newState;

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = e.target.value;

      return newState;
    });
  };

  switch (step) {
    case 1:
      return (
        <FinancialYearStep
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 2:
      return (
        <AgeStep
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 3:
      return (
        <IncomeDetailsStep
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 4:
      return (
        <DeductionsStep
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 5:
      return <Summary prevStep={prevStep} formData={formData} />;
    default:
      return <div>Error: Step not found</div>;
  }
};

export default IncomeTax;
