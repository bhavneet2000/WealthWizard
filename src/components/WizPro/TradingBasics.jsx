import React, { useState } from "react";
import "./TradingBasics.scss"; // Importing SCSS for styling

const TradingBasics = () => {
  const [activeModule, setActiveModule] = useState(null);

  // Sample data for course modules
  const modules = [
    {
      id: 1,
      title: "Introduction to Financial Markets",
      description: `Explore the basics of financial markets, including stocks, bonds, commodities, and derivatives.`,
      skills: [
        "Understanding Financial Markets",
        "Types of Financial Instruments",
        "Market Participants",
      ],
    },
    {
      id: 2,
      title: "Financial Statements and Analysis",
      description: `Learn to interpret financial statements (Income Statement and Balance Sheet) and perform ratio analysis.`,
      skills: [
        "Financial Statement Analysis",
        "Ratio Analysis",
        "Business Decision Making",
      ],
    },
    {
      id: 3,
      title: "Investment Strategies and Portfolio Management",
      description: `Develop strategies for investing in financial markets and managing investment portfolios.`,
      skills: [
        "Investment Strategies",
        "Portfolio Management Techniques",
        "Risk Management",
      ],
    },
    {
      id: 4,
      title: "Financial Regulations and Ethics",
      description: `Understand regulatory frameworks governing financial markets and ethical considerations.`,
      skills: [
        "Financial Regulations",
        "Ethical Issues in Finance",
        "Compliance and Governance",
      ],
    },
  ];

  // Function to handle module toggle
  const toggleModule = (moduleId) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };

  return (
    <div className="financial-markets-course">
      <h1 className="course-title">Financial Markets Course</h1>
      <div className="modules-list">
        {modules.map((module) => (
          <div key={module.id} className="module">
            <div
              className="module-header"
              onClick={() => toggleModule(module.id)}
            >
              <h2>{module.title}</h2>
              <span>{activeModule === module.id ? "-" : "+"}</span>
            </div>
            {activeModule === module.id && (
              <div className="module-details">
                <p>{module.description}</p>
                <h3>What You'll Learn:</h3>
                <ul>
                  {module.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingBasics;
