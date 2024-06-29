import React from "react";
import Header from "../Header/header";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Juniors = () => {
  return (
    <div className="h-screen flex flex-col bg-teal-50 font-sans">
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-screen-lg">
          {/* Page Heading */}
          <h1 className="text-4xl font-bold mb-8 text-center p-5 text-blue-800 font-serif">
            Financial Literacy for Young Minds
          </h1>

          {/* Modules */}
          <div className="max-h-[70vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Savings Module */}
              <Link to="/savings" className="hover:no-underline">
                <div className="bg-blue-200 h-full p-8 rounded-lg shadow-md cursor-pointer hover:bg-blue-300 flex justify-center items-center flex-col">
                  <h2 className="text-3xl font-bold mb-4 text-blue-800 font-serif overflow-hidden">
                    SAVINGS
                  </h2>
                  <p className="text-base text-gray-700 font-bold ">
                    Unlocking Financial Freedom: Building Strong Saving Habits.
                  </p>
                </div>
              </Link>

              {/* Budgeting Module */}
              <Link to="/budgeting" className="hover:no-underline">
                <div className="bg-green-200 h-full p-8 rounded-lg shadow-md cursor-pointer hover:bg-green-300 flex justify-center items-center flex-col">
                  <h2 className="text-3xl  mb-4 text-green-800 font-bold font-serif overflow-hidden ">
                    BUDGETING
                  </h2>
                  <p className="text-base text-gray-700 font-bold">
                    Master Money Management: Essential Skills for Effective
                    Budgeting
                  </p>
                </div>
              </Link>

              {/* Quiz Module */}
              <Link to="/games" className="hover:no-underline">
                <div className="bg-yellow-200 h-full p-8 rounded-lg shadow-md cursor-pointer hover:bg-yellow-300 flex justify-center items-center flex-col">
                  <h2 className="text-3xl font-bold mb-4 text-yellow-800 font-serif overflow-hidden">
                    FUN ZONE
                  </h2>
                  <p className="text-base text-gray-700 font-bold">
                    AdventureQuest: Explore, Learn, Win!
                  </p>
                </div>
              </Link>

              {/* Explore More Module */}
              <Link to="/explore" className="hover:no-underline">
                <div className="bg-purple-200 h-full p-8 rounded-lg shadow-md cursor-pointer hover:bg-purple-300 flex justify-center items-center flex-col">
                  <h2 className="text-3xl font-bold mb-4 text-purple-800 font-serif overflow-hidden">
                    EXPLORE MORE
                  </h2>
                  <p className="text-base text-gray-700 font-bold">
                    Discover Additional Resources: Expand Your Financial
                    Knowledge.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Juniors;
