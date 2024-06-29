import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/header";

const Seniors = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">
          Unlock Your Financial Potential: Enter the Prosperity Playground
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl">
          <ModuleLink
            to="/savings"
            color="blue"
            title="Savings"
            tagline="Manage Your Finances"
          />
          <ModuleLink
            to="/budgeting"
            color="green"
            title="Budgeting"
            tagline="Plan Your Expenses"
          />
          <ModuleLink
            to="/investment"
            color="yellow"
            title="Investment"
            tagline="Grow Your Wealth"
          />
          <ModuleLink
            to="/retirement"
            color="purple"
            title="Retirement"
            tagline="Prepare for the Future"
          />
          <ModuleLink
            to="/quiz"
            color="green"
            title="Quiz"
            tagline="Test Your Knowledge"
          />
          <ModuleLink
            to="/explore-more"
            color="blue"
            title="Explore More"
            tagline="Discover New Topics"
          />
        </div>
      </div>
    </div>
  );
};

const ModuleLink = ({ to, color, title, tagline }) => {
  let bgColor, hoverBgColor;

  // Determine background colors based on the color prop
  switch (color) {
    case "blue":
      bgColor = "blue-200";
      hoverBgColor = "blue-300";
      break;
    case "green":
      bgColor = "green-200";
      hoverBgColor = "green-300";
      break;
    case "yellow":
      bgColor = "yellow-200";
      hoverBgColor = "yellow-300";
      break;
    case "purple":
      bgColor = "purple-200";
      hoverBgColor = "purple-300";
      break;
    case "green":
      bgColor = "green-200";
      hoverBgColor = "green-300";
      break;
    case "blue":
      bgColor = "blue-200";
      hoverBgColor = "blue-300";
      break;
    default:
      bgColor = "blue-200";
      hoverBgColor = "blue-300";
      break;
  }

  // Concatenate class names using string concatenation
  const bgClass = `bg-${bgColor}`;
  const hoverBgClass = `hover:bg-${hoverBgColor}`;

  return (
    <Link
      to={to}
      className={`p-8 md:p-10 rounded-lg shadow-md ${bgClass} hover:${hoverBgClass} transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center`}
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        {title}
      </h2>
      <p className="text-base text-center">{tagline}</p>
    </Link>
  );
};

export default Seniors;
