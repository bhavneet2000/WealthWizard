import React from "react";
import { useAuth } from "../../AuthContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserCircle,
  faHome,
  faNewspaper,
  faUsers,
  faSignOutAlt,
  faCalculator,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";

// import coinsGif from "./coins.gif"; // Make sure to import your coins GIF

function Dashboard() {
  const { isAuthenticated, logout } = useAuth();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-teal-50 ">
      <div className="w-1/4 bg-blue-800 text-white flex flex-col">
        <div className="p-6 border-b border-blue-700 overflow-hidden">
          <h2 className="text-3xl font-bold mb-4  overflow-hidden">
            WealthWizard
          </h2>
        </div>
        <div className="flex-grow p-4">
          {/* WizPro Section */}
          <div className="mb-6">
            <Link
              to="/WizPro"
              className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <div className="flex items-center">
                <img
                  // src={coinsGif}
                  src="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718276712/coin_a758dr.gif"
                  alt="coins"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-xl font-semibold">WizPro</span>
              </div>
            </Link>
          </div>
          {/* Sidebar Links */}
          <ul className="space-y-4">
            <li>
              <Link
                to="/profile"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faUserCircle} className="mr-3" />
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faHome} className="mr-3" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/forum"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faUsers} className="mr-3" />
                Community Forum
              </Link>
            </li>
            <li>
              <Link
                to="/bot"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faMoneyBillAlt} className="mr-3" />
                WizBot
              </Link>
            </li>
            <li>
              <Link
                to="/calculate"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faCalculator} className="mr-3" />
                Financial Calculator
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faNewspaper} className="mr-3" />
                News
              </Link>
            </li>
            <li>
              <Link
                to="/tracker"
                className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faNewspaper} className="mr-3" />
                Budget Tracker
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-3/4 p-10">
        <h2 className="text-4xl text-blue-800 font-bold mb-8 text-center ">
          Empower Your Financial Journey with WealthWizard
        </h2>
        <div className="flex justify-between space-x-8">
          <div className="w-1/3 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <Link to="/juniors" className="block text-center">
              <img
                src="https://miro.medium.com/v2/resize:fit:1024/0*Wg8lzJC41aYgQXLv.png"
                alt="Junior Scholars"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-4 ">
                Junior Scholars
                <br /> (Age 12-18)
              </h3>
              <p className="font-semibold">
                Explore Financial Literacy Adventures for Young Minds!
              </p>
            </Link>
          </div>
          <div className="w-1/3 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <Link to="/seniors" className="block text-center">
              <img
                src="https://www.policybazaar.com/pblife/assets/images/pb_life_1676024257.jpg"
                alt="Financial Mastery Zone"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-4 ">
                Financial Mastery Zone (Age 18-60)
              </h3>
              <p className="font-semibold">
                Discover advanced learning opportunities in Finance!
              </p>
            </Link>
          </div>
          <div className="w-1/3 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <Link to="/retirement" className="block text-center">
              <img
                src="https://life.futuregenerali.in/media/mkxpbfoz/financial-planning-for-retirement.webp"
                alt="Retirement Plans"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-4 ">
                Retire Ease
                <br /> Age(60+)
              </h3>
              <p className="font-semibold">
                Charting Your Journey to Golden Years
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
