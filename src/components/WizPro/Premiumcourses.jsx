import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import FinHeader from "./FinHeader";

const Premiumcourses = () => {
  // State to manage toggle for each section
  const [contentVisibility, setContentVisibility] = useState({
    courseOverview: true,
    courseContent: false,
    whoFor: false,
  });

  // Function to toggle content visibility for each section
  const toggleContent = (section) => {
    setContentVisibility({
      ...contentVisibility,
      [section]: !contentVisibility[section],
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <FinHeader />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 overflow-hidden">
          The Complete Foundation Stock Trading Course
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Video and Course Price */}
          <div className="col-span-1 md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <iframe
                title="Course Overview"
                src="https://drive.google.com/file/d/1awmw49QTAYSYOBI-mLQ-OptLcFvge4zu/preview"
                width="700px" // Adjusted to 100% width
                height="350px"
                allow="autoplay"
                className="course-video"
                style={{ width: "100%", maxWidth: "100%" }} // Adjusted width style
              ></iframe>
              <div className="mt-6">
                <p className="text-xl font-bold mb-2">Course Price:</p>
                <p className="text-2xl font-bold mb-4">₹499</p>
                <p className="text-lg mb-4">This course includes:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>9.5 hours on-demand video</li>
                  <li>1 article</li>
                  <li>32 downloadable resources</li>
                  <li>Access on mobile and TV</li>
                  <li>Full lifetime access</li>
                  <li>Certificate of completion</li>
                </ul>
                <button className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md shadow-md">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="col-span-2 md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-3xl font-bold mb-6">About the Course</h2>
              <p className="text-lg mb-6">
                Gain a deep understanding of stock trading with our expertly
                curated course, designed to equip you with the knowledge and
                skills to navigate the financial markets confidently.
              </p>

              {/* Course Sections with Toggle */}
              <SectionWithToggle
                title="Course Overview"
                isOpen={contentVisibility.courseOverview}
                onToggle={() => toggleContent("courseOverview")}
              >
                <p className="mt-4">
                  In this course, you will learn how to trade the Stock Market.
                  It's a course designed for Complete Beginners and Intermediate
                  market participants. We start off by covering basic concepts
                  and work our way up to more advanced level material.
                </p>
              </SectionWithToggle>

              <SectionWithToggle
                title="Course Content"
                isOpen={contentVisibility.courseContent}
                onToggle={() => toggleContent("courseContent")}
              >
                <div className="mt-6">
                  <SubSection
                    title="Basics of Stock Market"
                    topics={[
                      "Introduction to stock market basics.",
                      "Understanding market participants.",
                      "Different types of financial instruments.",
                    ]}
                  />
                  <SubSection
                    title="Technical Analysis"
                    topics={[
                      "Master Technical Analysis: Candlestick Patterns, Chart Patterns, Volume, and Technical Indicators.",
                      "Explore different Exchanges: NYSE, NASDAQ & AMEX.",
                    ]}
                  />
                  <SubSection
                    title="Risk Management"
                    topics={[
                      "Understanding risk in trading.",
                      "Setting effective stop-loss strategies.",
                      "Managing position sizing.",
                    ]}
                  />
                  <SubSection
                    title="Trading Strategies"
                    topics={[
                      "Introduction to different trading strategies.",
                      "Developing a trading plan.",
                      "Backtesting strategies for consistency.",
                    ]}
                  />
                </div>
              </SectionWithToggle>

              <SectionWithToggle
                title="Who this Course is For"
                isOpen={contentVisibility.whoFor}
                onToggle={() => toggleContent("whoFor")}
              >
                <ul className="mt-6 ml-6">
                  <li className="mb-2">
                    Beginners who want to decrease their learning curve.
                  </li>
                  <li className="mb-2">
                    Traders who are starting out and Intermediary level Traders
                    who want to learn more.
                  </li>
                  <li className="mb-2">
                    Anyone who wants to Trade the Stock Market.
                  </li>
                  <li className="mb-2">
                    People who want to learn the most important concepts needed
                    in trading.
                  </li>
                  <li className="mb-2">
                    Traders who want to better time their entries and exits.
                  </li>
                </ul>
              </SectionWithToggle>
            </div>

            {/* What You Will Learn */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-3xl font-bold mb-6">What You Will Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7768/7768354.png"
                    alt="Finance & Accounting"
                    className="w-32 h-32 object-cover rounded-full mb-4"
                  />
                  <p className="text-xl font-semibold">Finance & Accounting</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn-icons-png.freepik.com/512/1870/1870488.png"
                    alt="Investing & Trading"
                    className="w-32 h-32 object-cover rounded-full mb-4"
                  />
                  <p className="text-xl font-semibold">Investing & Trading</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0HuYUEiABpckKeeBbdKcvu8YgWHiIL06TA&s"
                    alt="Stock Trading"
                    className="w-32 h-32 object-cover rounded-full mb-4"
                  />
                  <p className="text-xl font-semibold">Stock Trading</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable component for sections with toggle functionality
const SectionWithToggle = ({ title, isOpen, onToggle, children }) => (
  <div className="mb-6">
    <button
      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded flex items-center justify-between focus:outline-none"
      onClick={onToggle}
    >
      <span>{title}</span>
      <FontAwesomeIcon
        icon={faAngleDown}
        className={`ml-auto h-5 w-5 transition-transform ${
          isOpen ? "transform rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && <div className="mt-4">{children}</div>}
  </div>
);

// Component for each subsection under Course Content
const SubSection = ({ title, topics }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="list-disc pl-6">
      {topics.map((topic, index) => (
        <li key={index} className="mb-2">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-green-500 mr-2"
          />
          {topic}
        </li>
      ))}
    </ul>
  </div>
);

export default Premiumcourses;
