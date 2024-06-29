import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "./rafiki.png";
import "./Login.scss";
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../AuthContext";

function Login() {
  const [email, setemailval] = useState("");
  const [password, setpassval] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Sign in user with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log("User signed in:", user);
        // Trigger success notification
        toast.success("Login successful!");
        // Update auth context
        login();
        // Redirect user to another page upon successful login
        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorCode, errorMessage);
        // Trigger error notification
        toast.error("Invalid email or password. Please try again.");
      });
  };

  return (
    <div className="column">
      <div className="stack">
        <div className="stack1">
          <img id="img-logo" src={logo} alt="img" />
        </div>
        <div className="column1">
          <div className="top-box">
            <h3>Log in</h3>
            <p className="txt-1">
              New to WealthWizard? <Link to="/signup"> Register Here..</Link>
            </p>
          </div>
          <div className="input-form">
            <form onSubmit={handleFormSubmit}>
              <label className="lab-font" htmlFor="emil1">
                Email address
              </label>
              <input
                placeholder="Enter your email..."
                type="email"
                name="mail"
                onChange={(e) => setemailval(e.target.value)}
                id="emil1"
              />
              <label className="lab-font" htmlFor="pwd1">
                Password
              </label>
              <input
                placeholder="Enter your password..."
                type="password"
                name="password"
                onChange={(e) => setpassval(e.target.value)}
                id="pwd1"
              />
              <button type="submit" id="sub_button" className="button-block">
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
