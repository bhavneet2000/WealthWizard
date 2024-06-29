import React from "react";
import Header from "../Header/header";

const IntroSaving = () => {
  const backgroundImage =
    "https://img.freepik.com/free-vector/3d-cube-abstract-design_53876-115315.jpg";

  return (
    <div>
      <Header />
      <div
        className="p-6 rounded-lg shadow-lg my-8"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
          color: "black",
        }}
      >
        <div className=" bg-opacity-70 p-6 rounded-lg">
          <h2 className="text-4xl font-bold mb-4 text-center">Savings</h2>
          <p className="text-lg mb-6 font-semibold">
            Savings represents an individual’s unspent earnings. It is the
            amount that remains after meeting the household and other personal
            expenses over a given period, for example, on a monthly basis.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">What is Savings?</h3>
          <p className="text-lg mb-4 font-semibold">
            Savings is the balance that remains after meeting the consumption
            needs of an individual. People who buy on credit and have
            incremental EMI commitments would have little or none to save on a
            monthly basis. Savings help in pooling up funds for the future.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">
            Why is Savings Important?
          </h3>
          <p className="text-lg mb-4 font-semibold">
            Savings can be as simple as keeping aside money on a monthly basis
            or even investing small amounts on a monthly basis. Savings can help
            in meeting financial commitments at a future date, for example, to
            buy a house.
          </p>
          <p className="text-lg mb-4 font-semibold">
            Savings can help you earn more money with investments. Even money
            kept idle in a bank savings account earns interest annually.
          </p>
          <p className="text-lg mb-4 font-semibold">
            Funds saved or set aside also enable an individual to stand against
            unforeseen emergencies. Such emergencies can arise at any time to an
            individual due to any reason, such as the COVID-19 pandemic spread
            as well as the lockdown.
          </p>
          <p className="text-lg mb-4 font-semibold">
            For example, Ms Z’s monthly paycheck is Rs.4,000. Her expenses
            include an Rs.1,000 on rent payment, an Rs.400 car payment, an
            Rs.300 student loan payment, an Rs.100 credit card payment, Rs.150
            for groceries, Rs.50 for utilities, Rs.25 for her cellphone and
            Rs.75 for gas.
          </p>
          <p className="text-lg mb-4 font-semibold">
            Since her monthly income is Rs.5,000 and her monthly expenses are
            Rs.2,100, Ms Z has Rs.1,900 leftover. If Z saves her excess income,
            she has money to live on while resolving her problems in the case of
            an emergency.
          </p>
          <p className="text-lg mb-4 font-semibold">
            If Z does not save her extra money and exceed her expenses over her
            income, it means she is living paycheck to paycheck. In the case of
            an emergency, she does not have money to meet her day-to-day
            expenses, bills, and emergency expenses.
          </p>
          <p className="text-lg mb-4 font-semibold">
            Savings can be used to increase income by investing through
            different investment avenues or vehicles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSaving;
