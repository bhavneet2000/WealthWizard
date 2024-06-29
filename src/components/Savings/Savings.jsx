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

const Savings = () => {
  const [userId, setUserId] = useState(null);
  const [topicStatus, setTopicStatus] = useState({
    "Introduction to Saving": false,
    "Setting Aside Allowance or Pocket Money for Savings": false,
    "Saving for Short-Term Goals": false,
    "Identifying Wants vs. Needs": false,
    "Opening a Savings Account": false,
    "Setting and Tracking Savings": false,
    "Learning About Interest and How It Grows Savings": false,
    "Exploring basic financial terms": false,
    "Exploring Different Types of Savings Accounts": false,
    "Creating a Long-Term Savings Plan": false,
    "Introduction to Investing for Teens": false,
    "Learning About Credit and Debt Management": false,
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
          if (userData.topicStatus) {
            setTopicStatus(userData.topicStatus);
            updateProgress(userData.topicStatus);
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

  const handleTopicStatusChange = async (topic) => {
    const updatedStatus = {
      ...topicStatus,
      [topic]: !topicStatus[topic],
    };
    setTopicStatus(updatedStatus);
    updateProgress(updatedStatus);

    if (userId) {
      await setDoc(
        doc(db, "users", userId),
        { topicStatus: updatedStatus },
        { merge: true }
      );
    }
  };

  const links = {
    "Introduction to Saving": {
      article: "/introduction-to-saving",
      video: "https://www.youtube.com/watch?v=JkCmIxraWlM",
      thumbnail:
        "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/importance-of-having-savings-717x404.jpg",
    },
    "Setting Aside Allowance or Pocket Money for Savings": {
      article: "/setting-aside-allowance",
      video: ",https://www.youtube.com/watch?v=NfurkrZEn3Q",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOaw83vGVmOjjh3o6RzD-uUtPFfUZuUJHSA&s",
    },
    "Saving for Short-Term Goals ": {
      article: "/setting-aside-allowance",
      video: "https://www.youtube.com/watch?v=v-mlEQ7KW5Q&t=4s",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GPVYyTRWvaFThZHpz3cvSnEGqywabKac5g&s",
    },
    "Identifying Wants vs. Needs": {
      article: "/setting-aside-allowance",
      video: "https://www.youtube.com/watch?v=9ZxpWI1rDTE",
      thumbnail:
        "https://assets-global.website-files.com/641d54fdcc011edcca41c54a/6442463cfee77f50c4c6f3fd_63ac3ee20a48263161388ef6_Differentiate%2520between%2520needs%2520and%2520wants%2520for%2520ideal%2520money%2520management-Feature%2520image.jpeg",
    },

    // Add more topics with their respective video URLs and thumbnail images MEDIUM
    "Opening a Savings Account": {
      article: "/open-saving",
      video: "https://youtu.be/JqYoLQXO7j4?si=SghlmZpNNGKSW7zB",
      thumbnail:
        "https://www.axisbank.com/images/default-source/progress-with-us_new/features-to-look-for-when-opening-a-digital-savings-account.jpg?sfvrsn=809f1856_2",
    },
    "Setting and Tracking Savings": {
      article: "/introduction-to-saving",
      video: "https://youtu.be/JqYoLQXO7j4?si=SghlmZpNNGKSW7zB",
      thumbnail: "https://i.ytimg.com/vi/lCM4VA2qabU/maxresdefault.jpg",
    },
    "Learning About Interest and How It Grows Savings": {
      article: "/introduction-to-saving",
      video: "https://youtu.be/JqYoLQXO7j4?si=SghlmZpNNGKSW7zB",
      thumbnail:
        "https://www.wintwealth.com/blog/wp-content/uploads/2022/10/Learn-how-to-grow-your-money.jpg",
    },
    "Exploring basic financial terms": {
      article: "/introduction-to-saving",
      video: "https://youtu.be/JqYoLQXO7j4?si=SghlmZpNNGKSW7zB",
      thumbnail:
        "https://www.tickertape.in/blog/wp-content/uploads/2022/07/TT-7-July-Financial-terms-BB-scaled.jpeg",
    },
    //HARD
    "Exploring Different Types of Savings Accounts": {
      article: "/different-saving",
      video: "https://youtu.be/JqYoLQXO7j4?si=SghlmZpNNGKSW7zB",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEEiiIdRuCl8MstXTA3GqdbPGCkg8ByQSpA&s",
    },
    "Creating a Long-Term Savings Plan": {
      article: "/introduction-to-saving",
      video: "https://youtu.be/JqYoLQXO7j4?si=SghlmZpNNGKSW7zB",
      thumbnail:
        "https://paytmblogcdn.paytm.com/wp-content/uploads/2023/09/Blog_Paytm_What-Is-a-Long-Term-Investment-and-What-Are-Its-Benefits.jpg",
    },
    "Introduction to Investing for Teens": {
      article: "/introduction-to-saving",
      video: "https://youtu.be/JqYoLQXO7j4?si=SghlmZpNNGKSW7zB",
      thumbnail:
        "https://m.foolcdn.com/media/dubs/images/investing-for-teens-infographic.width-880.png",
    },
    "Learning About Credit and Debt Management": {
      article: "/introduction-to-saving",
      video: "https://youtu.be/JqYoLQXO7j4?si=SghlmZpNNGKSW7zB",
      thumbnail:
        "https://www.go-yubi.com/wp-content/uploads/2022/03/Debt-Management-Plan-Affects-Your-Credit-1024x535.jpg",
    },
  };

  const easyTopics = [
    "Introduction to Saving",
    "Setting Aside Allowance or Pocket Money for Savings",
    "Saving for Short-Term Goals ",
    "Identifying Wants vs. Needs",
  ];

  const mediumTopics = [
    "Opening a Savings Account",
    "Setting and Tracking Savings",
    "Learning About Interest and How It Grows Savings",
    "Exploring basic financial terms",
  ];

  const hardTopics = [
    "Exploring Different Types of Savings Accounts",
    "Creating a Long-Term Savings Plan",
    "Introduction to Investing for Teens",
    "Learning About Credit and Debt Management",
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
      <h2 className="pt-8 flex justify-center font-bold text-4xl text-blue-900  font-serif overflow-hidden">
        SAVINGS
      </h2>
      <div className="border border-gray-300 p-4 rounded-lg">
        <p className="pt-4 text-blue-500 text-xl font-bold italic text-center ">
          WealthWizard's Savings Adventure: Let's Journey into Financial Wisdom!
        </p>
      </div>
      <div className="pt-6 w-3/4 mx-auto mb-8">
        <div className="relative pt-1">
          <div className="overflow-hidden h-6 mb-4 text-xs flex rounded bg-purple-200">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500 transition-all duration-500"
            >
              {progress}%
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={() => setDifficultyLevel("easy")}
            className={`${difficultyLevel === "easy"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800"
              } px-4 py-2 rounded`}
          >
            Beginner
          </button>
          <button
            onClick={() => setDifficultyLevel("medium")}
            className={`${difficultyLevel === "medium"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-800"
              } px-4 py-2 rounded`}
          >
            Intermediate
          </button>
          <button
            onClick={() => setDifficultyLevel("hard")}
            className={`${difficultyLevel === "hard"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-800"
              } px-4 py-2 rounded`}
          >
            Advanced
          </button>
        </div>
        <table className="w-full mx-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-2 py-1 bg-gray-100 border border-gray-200">
                Topics
              </th>
              <th className="px-5 py-1 bg-gray-100 border border-gray-200">
                Reading References
              </th>
              <th className="px-3 py-1 bg-gray-100 border border-gray-200">
                <FontAwesomeIcon icon={faYoutube} /> Watch and Learn
              </th>
              <th className="px-3 py-1 bg-gray-100 border border-gray-200">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTopics().map((topic) => (
              <tr key={topic}>
                <td className="font-bold  px-2 py-1 border border-gray-200">
                  {topic}
                </td>
                <td className="px-2 py-1 border border-gray-200">
                  <Link
                    to={links[topic].article}
                    className="text-blue-500 right-2"
                  >
                    <FontAwesomeIcon icon={faNewspaper} /> Article
                  </Link>
                </td>
                <td className="px-2 py-1 border border-gray-200">
                  <a
                    href={links[topic].video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500"
                  >
                    <img
                      src={links[topic].thumbnail}
                      alt="Video Thumbnail"
                      className="h-30 w-40" // Adjust the size as needed
                    />
                  </a>
                </td>
                <td className="px-2 py-1 border border-gray-200">
                  <input
                    type="checkbox"
                    checked={topicStatus[topic]}
                    onChange={() => handleTopicStatusChange(topic)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Savings;
