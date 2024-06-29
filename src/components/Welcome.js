import React, { useEffect } from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  // Function to scroll to the home section on initial load
  useEffect(() => {
    scrollToSection("home-section");
  }, []);

  // Function to scroll to a section by ID
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="top-nav">
        <button
          className="top-button"
          onClick={() => scrollToSection("home-section")}
        >
          Home
        </button>
        <button
          className="top-button"
          onClick={() => scrollToSection("about-section")}
        >
          About
        </button>
        <Link to="/login">
          <button className="top-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="top-button">Sign up</button>
        </Link>
      </div>

      <div id="home-section" className="section home-section">
        <div className="home-content">
          <h1>WealthWizard</h1>
          <p>
            Master Your Finances, Shape Your Future: <br />
            Where Learning Meets Investment Innovation. <br />
            Discover personalized learning paths, advanced investment tools, and
            gain confidence in managing your finances.
          </p>
        </div>
        <div className="home-image-wrapper">
          <img
            src="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718310821/Cloud-Computing_ytrfsn.gif"
            alt="Cloud Computing"
            className="home-image"
          />
        </div>
      </div>

      <div id="about-section" className="section about-section">
        <div className="about-content">
          <h2>About WealthWizard</h2>
          <p>
            WealthWizard is an innovative platform designed to help individuals
            master their finances through interactive learning experiences and
            cutting-edge investment strategies. We aim to empower users to take
            control of their financial future with confidence and knowledge.
            Join us to explore personalized learning paths and investment tools
            tailored to your needs. Our mission is to make financial education
            accessible and engaging for everyone.
          </p>
          <div className="carousel">
            <img
              src="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718310802/E-Learning-Platform_eh7iss.gif"
              alt="E-Learning Platform"
            />
            <img
              src="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718310663/Video_chatting_yoornc.gif"
              alt="Video Chatting"
            />
            <img
              src="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718282583/gifts_g2b0ia.gif"
              alt="Gifts"
            />
            <img
              src="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718281733/mentor_f1khfg.gif"
              alt="Mentor"
            />
            <img
              src="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718310833/Money-idea_howm0n.gif"
              alt="Money Idea"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
