import React, { useEffect, useState } from "react";
import {
  getDoc,
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import "./profile.scss";
import Header from "../Header/header";
import Avatar from "react-avatar";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    profession: "",
    dob: "",
    email: "",
    wealthWizardId: "",
  });
  const [totalScore, setTotalScore] = useState(0);
  const [error, setError] = useState("");
  const [topicStatus, setTopicStatus] = useState({});
  const [budgetStatus, setBudgetStatus] = useState({});
  const [progress, setProgress] = useState(0);
  const [unsubscribeStatus, setUnsubscribeStatus] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserData(userData);
          setFormValues({
            username: userData.username || "",
            profession: userData.profession || "",
            dob: userData.dob || "",
            email: user.email || "",
            wealthWizardId: userData.wealthWizardId || "",
          });

          const postsQuery = query(
            collection(db, "posts"),
            where("userFirstName", "==", userData.username)
          );
          const postDocs = await getDocs(postsQuery);
          const totalUpvotes = postDocs.docs.reduce(
            (sum, doc) => sum + (doc.data().score || 0),
            0
          );
          setTotalScore(totalUpvotes);

          const userRef = doc(db, "users", user.uid);
          const unsubscribe = onSnapshot(userRef, (doc) => {
            const data = doc.data();
            if (data) {
              setTopicStatus(data.topicStatus || {});
              setBudgetStatus(data.budgetStatus || {});
            }
          });
          setUnsubscribeStatus(() => unsubscribe);
        } else {
          console.error("No such document!");
        }
      } else {
        console.error("User is not signed in");
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
      if (unsubscribeStatus) {
        unsubscribeStatus();
      }
    };
  }, [unsubscribeStatus]);

  useEffect(() => {
    const calculateProgress = () => {
      const topicCount = Object.values(topicStatus).filter(
        (status) => status
      ).length;
      const budgetCount = Object.values(budgetStatus).filter(
        (status) => status
      ).length;
      const totalCount =
        Object.keys(topicStatus).length + Object.keys(budgetStatus).length;
      const calculatedProgress = Math.floor(
        ((topicCount + budgetCount) / totalCount) * 100
      );
      setProgress(calculatedProgress);
    };

    calculateProgress();
  }, [topicStatus, budgetStatus]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = async () => {
    const currentUser = auth.currentUser;
    if (!formValues.username) {
      setError("Username is required");
      return;
    }
    setError("");

    if (currentUser) {
      try {
        await setDoc(doc(db, "users", currentUser.uid), {
          username: formValues.username,
          profession: formValues.profession,
          dob: formValues.dob,
          email: formValues.email,
          wealthWizardId: formValues.wealthWizardId,
        });
        setIsEditing(false);
        console.log("User data saved successfully!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!userData) {
    return <div>No user data found</div>;
  }

  // Prepare data for pie chart
  const pieData = [
    {
      name: "Savings Completed",
      value: Object.values(topicStatus).filter((status) => status).length,
    },
    {
      name: "Budgets Completed",
      value: Object.values(budgetStatus).filter((status) => status).length,
    },
  ];

  // Custom colors for pie chart segments
  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div>
      <Header />
      <div className="profile-page">
        <div className="profile-container">
          <h1 className="profile-title text-center text-3xl p-5">
            WealthWizard Profile
          </h1>

          <div className="profile-header">
            <Avatar
              size="100"
              round={true}
              name={userData.username}
              className="avatar"
            />
            <div className="username">{userData.username}</div>
            <button
              className="edit-button"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? (
                <FontAwesomeIcon icon={faTimesCircle} />
              ) : (
                <FontAwesomeIcon icon={faEdit} />
              )}
            </button>
          </div>

          {isEditing ? (
            <div className="edit-form">
              <input
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleInputChange}
                placeholder="Username"
                className="input-field"
              />
              <input
                type="text"
                name="profession"
                value={formValues.profession}
                onChange={handleInputChange}
                placeholder="Profession"
                className="input-field"
              />
              <input
                type="date"
                name="dob"
                value={formValues.dob}
                onChange={handleInputChange}
                placeholder="Date of Birth"
                className="input-field"
              />
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Email"
                disabled
                className="input-field"
              />
              <input
                type="text"
                name="wealthWizardId"
                value={formValues.wealthWizardId}
                onChange={handleInputChange}
                placeholder="WealthWizard ID"
                className="input-field"
              />
              {error && <div className="error">{error}</div>}
              <button className="save-button" onClick={handleSave}>
                <FontAwesomeIcon icon={faSave} /> Save
              </button>
            </div>
          ) : (
            <div className="profile-details">
              <div className="profile-item">
                <strong className="font-bold text-xl">Email:</strong>{" "}
                {userData.email}
              </div>
              <div className="profile-item">
                <strong className="font-bold text-xl">Profession:</strong>{" "}
                {userData.profession || "Not provided"}
              </div>
              <div className="profile-item">
                <strong className="font-bold text-xl">Date of Birth:</strong>{" "}
                {userData.dob || "Not provided"}
              </div>
              <div className="profile-item">
                <strong className="font-bold text-xl">WealthWizardId</strong>{" "}
                {userData.wealthWizardId || "Not provided"}
              </div>
              <div className="profile-item">
                <strong className="font-bold text-xl">Total Score:</strong>{" "}
                {totalScore}
              </div>
              <div className="profile-item">
                <strong className="font-bold text-xl">Progress:</strong>{" "}
                {progress}%
                <div className="pie-chart-container">
                  <h3 className="text-3xl  pt-4 font-bold">Performance Bar</h3>
                  <ResponsiveContainer width="100%" height={500}>
                    <PieChart width={500} height={500}>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
