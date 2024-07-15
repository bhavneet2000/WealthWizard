import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Header from "../Header/header";

const Quiz = () => {
  return (
    <div style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
      <Header />

      <h1 className="text-center text-3xl p-5">
        Unlock Financial Expertise: Engage with Dynamic Quiz Challenges!
      </h1>

      <div>
        <h1 className="text-xl p-2 mx-20">
          Building Financial Strategy: A Savings Case Study
        </h1>
        <div className="p-5 flex">
          <div className="mx-20">
            <iframe
              title="Building Financial Strategy: A Savings Case Study"
              src="https://drive.google.com/file/d/1DcGyR9fh3E36GJCYv7k1ShR_UnHKGneg/preview"
              width="400"
              height="300"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="w-full md:w-1/3 bg-gray-200 p-5 ml-3 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Test Your Knowledge</h2>
            <p className="text-lg mb-4">
              Take a quiz to reinforce your understanding after watching this
              case study.
            </p>
            <Link to="/quiz/saving">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Take Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-xl p-2 mx-20">
          Navigating the Road to Retirement: Sophia's Financial Journey
        </h1>
        <div className="p-5 flex">
          <div className="mx-20">
            <iframe
              title="Navigating the Road to Retirement: Sophia's Financial Journey"
              src="https://drive.google.com/file/d/1XUo3Nfpyu-5jjQUTU9vRQbXd2-Xwpv5J/preview"
              width="400"
              height="300"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="w-full md:w-1/3 bg-gray-200 p-5 ml-3 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Test Your Knowledge</h2>
            <p className="text-lg mb-4">
              Take a quiz to reinforce your understanding after watching this
              case study.
            </p>
            <Link to="/quiz/retirement">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Take Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
