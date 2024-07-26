// src/components/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/LandingPage.css"; // Ensure this file contains the necessary styles

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="nav-left">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1721168513/surebanker_logo_aoy8rn.svg"
            alt="SureBanker Logo"
            className="logo"
          />
          <span className="brand-name">SureBanker</span>
        </div>
        <div className="nav-center">
          <Link to="/help">Help</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="nav-right">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
      <div className="landing-header">
        <div className="" landing-header-1>
          <h1>Welcome to SureBanker</h1>
          <p>Your journey to financial freedom starts here!</p>
          <Link to="/home" className="get-started-btn">
            Get Started
          </Link>
        </div>

        <div className="" landing-header-2></div>
      </div>
    </div>
  );
};

export default LandingPage;
