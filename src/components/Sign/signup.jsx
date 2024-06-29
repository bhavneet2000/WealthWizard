import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "./pana.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { setDoc, doc } from "firebase/firestore";
import "./signup.scss";

function Register() {
  const [email, setemailval] = useState("");
  const [uname, setuname] = useState("");
  const [password, setpassval] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log("User signed up:", user);
        // Save user data to Firestore
        if (user) {
          setDoc(doc(db, "users", user.uid), {
            // Corrected user.id to user.uid
            email: user.email,
            username: uname,
          });
          toast.success("Registration successful!");
        }

        navigate("/login");
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up:", errorCode, errorMessage);
        // Trigger error notification
        toast.error(`Error: ${errorMessage}`);
      });
  };

  return (
    <div className="column">
      <div className="stack">
        <div className="stack1">
          <img id="img-logos" src={logo} alt="img" />
        </div>
        <div className="column1">
          <div className="top-box">
            <h3>Signup</h3>
            <p className="txt-1">
              Already registered? <Link to="/login"> Go to Login Page..</Link>
            </p>
          </div>
          <div className="input-form">
            <form onSubmit={handleFormSubmit}>
              <label className="lab-font" htmlFor="uname">
                User Name
              </label>
              <input
                placeholder="Enter Username..."
                type="text"
                name="uname"
                autoComplete="off"
                onChange={(e) => {
                  setuname(e.target.value);
                }}
                id="emil1" // Keeping this id as per your request
              />
              <label className="lab-font" htmlFor="email">
                Email address
              </label>
              <input
                placeholder="Enter your email..."
                type="email"
                name="email"
                onChange={(e) => {
                  setemailval(e.target.value);
                }}
                id="emil1"
              />
              <label className="lab-font" htmlFor="pwd1">
                Password
              </label>
              <input
                placeholder="Enter your password..."
                type="password"
                name="password"
                onChange={(e) => {
                  setpassval(e.target.value);
                }}
                id="pwd1"
              />
              <button type="submit" id="sub_button" className="button-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
