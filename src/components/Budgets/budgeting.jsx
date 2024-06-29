import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import Header from "../Header/header";
import "tailwindcss/tailwind.css";

const Budgeting = () => {
  const [userId, setUserId] = useState(null);
  const [budgetStatus, setBudgetStatus] = useState({
    "Introduction to Budgeting": false,
    "Tracking Income and Expenses": false,
    "Creating a Basic Monthly Budget": false,
    "Identifying and Cutting Unnecessary Expenses": false,
    "Developing a Comprehensive Budgeting Plan": false,
    "Understanding Different Budgeting Methods": false,
    "Budgeting for Irregular Expenses": false,
    "Emergency Fund Planning and Savings": false,
    "Advanced Expense Forecasting and Planning": false,
    "Incorporating Debt Repayment Strategies into the Budget": false,
    "Budgeting for Variable Income or Self-Employment": false,
    "Tax Planning and Budgeting for Tax Liabilities": false,
  });
  const [progress, setProgress] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState("easy");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.budgetStatus) {
            setBudgetStatus(userData.budgetStatus);
            updateProgress(userData.budgetStatus);
          }
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const updateProgress = (status) => {
    const totalTopics = Object.keys(status).length;
    const completedTopics = Object.values(status).filter(
      (value) => value
    ).length;
    setProgress(Math.round((completedTopics / totalTopics) * 100));
  };

  const handleBudgetStatusChange = async (topic) => {
    const updatedStatus = {
      ...budgetStatus,
      [topic]: !budgetStatus[topic],
    };
    setBudgetStatus(updatedStatus);
    updateProgress(updatedStatus);

    if (userId) {
      await setDoc(
        doc(db, "users", userId),
        { budgetStatus: updatedStatus },
        { merge: true }
      );
    }
  };

  const links = {
    "Introduction to Budgeting": {
      article: "/introduction-to-budgeting",
      video: " https://www.youtube.com/watch?v=CbhjhWleKGE",
      thumbnail:
        "https://storage.googleapis.com/5paisa-prod-storage/files/market-guide/WHAT%20IS%20BUDGET.jpeg",
    },
    "Tracking Income and Expenses": {
      article: "/setting-aside-allowance",
      video: "https://www.youtube.com/watch?v=4sT2B2SRyp",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWM-MZtIYxV-NlZdC9aHcq1LzCYdezezZVA&s",
    },
    "Creating a Basic Monthly Budget": {
      article: "/setting-aside-allowance",
      video: "https://www.youtube.com/watch?v=3pslPbfpnzk",
      thumbnail:
        "https://www.incharge.org/wp-content/uploads/2015/06/How-To-Make-A-Budget.jpg",
    },
    "Identifying and Cutting Unnecessary Expenses": {
      article: "/setting-aside-allowance",
      video: "https://www.youtube.com/watch?v=zpE51blDeh8",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsgk1Z887SW2q-_3Up1Qezrd1Zda5CN_Z_7w&s",
    },
    // Add more topics with their respective video URLs and thumbnail images
    "Developing a Comprehensive Budgeting Plan": {
      article: "/introduction-to-budgeting",
      video: "https://www.youtube.com/watch?v=Epk1SQr9lmE",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHsMpD1zj7RIUm7xCt9KC07SBdtF4ITZk8g&s",
    },
    "Understanding Different Budgeting Methods": {
      article: "/budgeting-methods",
      video: "https://www.youtube.com/watch?v=fqWFCqJIcvs",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAU3FXyysukVhpvLuxBFqCpxQ0smA8TB62bw&s",
    },
    "Budgeting for Irregular Expenses": {
      article: "/introduction-to-expenses",
      video: "https://www.youtube.com/watch?v=fFiRdOUe3SA",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0osSOhucQt01VU4-XxF2Ni_1LRdERSAKWQ&s",
    },
    "Emergency Fund Planning and Savings": {
      article: "/emergency-funding",
      video: "-https://www.youtube.com/watch?v=71v0qXJ2EbM",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_mpuOELJAaz_dloUGKq4RynRck7YDpUqhw&s",
    },
    // Hard topics
    "Advanced Expense Forecasting and Planning": {
      article: "/forecasting-planning",
      video: "https://www.youtube.com/watch?v=Awm_LxHbHHE",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2tnBWsKgBogOJKcuQlSvlK1HtkxYnl16hw&s",
    },
    "Incorporating Debt Repayment Strategies into the Budget": {
      article: "/debt-repayment-strategies",
      video: " https://www.youtube.com/watch?v=vluwnosOkao",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOXSYx2MJB-jN8nBgWVwNjG_A9KR8X9GG2A&s",
    },
    "Budgeting for Variable Income or Self-Employment": {
      article: "/variable-income-selfemployment",
      video: "https://www.youtube.com/watch?v=0djeUYALXe0",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UA9910bm5dyY-Mv_8hDOUYC3WegfUbxu5w&s",
    },
    "Tax Planning and Budgeting for Tax Liabilities": {
      article: "/tax-planning-liabilities",
      video: "https://www.youtube.com/watch?v=OpvadqcHo9o",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFy9pLPPxZleXWVcxE-wYF_dzAmrEJ0DbtiA&s",
    },
  };

  const easyTopics = [
    "Introduction to Budgeting",
    "Tracking Income and Expenses",
    "Creating a Basic Monthly Budget",
    "Identifying and Cutting Unnecessary Expenses",
  ];

  const mediumTopics = [
    "Developing a Comprehensive Budgeting Plan",
    "Understanding Different Budgeting Methods",
    "Budgeting for Irregular Expenses",
    "Emergency Fund Planning and Savings",
  ];

  const hardTopics = [
    "Advanced Expense Forecasting and Planning",
    "Incorporating Debt Repayment Strategies into the Budget",
    "Budgeting for Variable Income or Self-Employment",
    "Tax Planning and Budgeting for Tax Liabilities",
  ];

  const filteredTopics = () => {
    switch (difficultyLevel) {
      case "easy":
        return easyTopics;
      case "medium":
        return mediumTopics;
      case "hard":
        return hardTopics;
      default:
        return [];
    }
  };

  return (
    <div className="bg-teal-50">
      <Header />
      <h2 className="pt-8 flex justify-center font-bold text-4xl text-blue-900 font-serif">
        BUDGET
      </h2>
      <div className="border border-gray-300 p-4 rounded-md shadow-md bg-teal-50 mx-96 my-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Your Progress: {progress}%
        </h2>
        <div className="w-full h-4 bg-gray-300 rounded">
          <div
            className="h-full bg-blue-500 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-center space-x-4 my-4">
        <button
          className={`${
            difficultyLevel === "easy"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          } px-4 py-2 rounded`}
          onClick={() => setDifficultyLevel("easy")}
        >
          Beginner
        </button>
        <button
          className={`${
            difficultyLevel === "medium"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          } px-4 py-2 rounded`}
          onClick={() => setDifficultyLevel("medium")}
        >
          Intermediate
        </button>
        <button
          className={`${
            difficultyLevel === "hard"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          } px-4 py-2 rounded`}
          onClick={() => setDifficultyLevel("hard")}
        >
          Advanced
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-4">
        {filteredTopics().map((topic) => (
          <div
            key={topic}
            className={`border p-4 rounded-lg shadow-md w-64 ${
              budgetStatus[topic] ? "bg-blue-200" : "bg-white"
            }`}
          >
            <img
              src={links[topic].thumbnail}
              alt={topic}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{topic}</h3>
            <div className="flex space-x-2">
              <a
                href={links[topic].video}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <Link
                to={links[topic].article}
                className="text-blue-500"
              >
                <FontAwesomeIcon icon={faNewspaper} size="2x" />
              </Link>
            </div>
            <button
              onClick={() => handleBudgetStatusChange(topic)}
              className={`mt-4 w-full px-4 py-2 rounded ${
                budgetStatus[topic]
                  ? "bg-green-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {budgetStatus[topic] ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Budgeting;
