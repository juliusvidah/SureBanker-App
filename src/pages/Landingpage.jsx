// src/pages/Landingpage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landingpage = () => {
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate('/signin');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div>
      <h1>Welcome to S-Banker</h1>
      <button onClick={handleSigninClick}>Sign In</button>
      <button onClick={handleSignupClick}>Sign Up</button>
    </div>
  );
};

export default Landingpage;
