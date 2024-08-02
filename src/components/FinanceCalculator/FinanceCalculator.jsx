import React from "react";
import Header from "../Header/header";
import { Link } from "react-router-dom";

const FinanceCalculator = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden scrollbar-hidden">
      <Header />
      <div className="container mx-auto px-4 py-12 overflow-hidden">
        <h1 className="text-4xl font-bold text-purple-900 text-center mb-8 overflow-hidden ">
          Finance Calculator: Your Gateway to Smarter Financial Decisions!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to="/income-tax">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/D4D12AQGZpl4J5OwnyQ/article-cover_image-shrink_600_2000/0/1667126044636?e=2147483647&v=beta&t=p8j0bhyPO94xpJvBep79UoLKWy4kSHIkOZbBSPAqof4"
                  alt="IncomeTaxcalculator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Income Tax Calculator
                </h2>
                <p className="text-base text-gray-700">
                  Quickly estimate your tax obligations and plan your finances
                  with ease!
                </p>
              </div>
            </Link>
          </div>

          {/* Retirement Calculator */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to="/retirement-calculator">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://www.adityabirlacapital.com/abc-of-money/-/media/Project/ABCL/Internal_Images_526x230/526x230/RP/5_Crore_Is_this_much_amount_enough_for_retirement_rp_ph4_001_526_230.ashx"
                  alt="Retirement Calculator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Retirement Calculator
                </h2>
                <p className="text-base text-gray-700">
                  Calculate how much more you need for a relaxed retirement.
                </p>
              </div>
            </Link>
          </div>

          {/* Inflation Calculator */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to="/inflation">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2021/04/inflation-calculator-vector-1.png"
                  alt="Inflation Calculator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Inflation Calculator
                </h2>
                <p className="text-base text-gray-700">
                  Track the effects of inflation with our handy inflation
                  calculator.
                </p>
              </div>
            </Link>
          </div>
          {/* Compound Interest Calculator */}

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to="/compound-interest">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://blog.taxact.com/wp-content/uploads/TaxCalculators_and_TaxTools_Blog.jpeg"
                  alt="Compound Interest Calculator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Compound Interest Calculator
                </h2>
                <p className="text-base text-gray-700">
                  Calculate compound interest and see how your investments grow
                  over time.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCalculator;
