import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/signin.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    
    // Navigate to home on successful sign-in
    navigate('/home');
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <header className="signin-header">
          <img src="https://res.cloudinary.com/duicyr28v/image/upload/v1722374889/SB_LOGO_yixwfz.svg" alt="Horizon Logo" className="signin-logo" />
          <h1>Sign in</h1>
          <p>Welcome back! Please enter your details.</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>
          <button type="submit" className="btn-primary">
            Sign in
          </button>
        </form>
        <div className="signup-prompt">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
      <div className="signin-image">
        <img src="https://res.cloudinary.com/duicyr28v/image/upload/v1722404737/9951f78474309b2ddc3d44cc201c51be_kkjnqk.jpg" alt="Background" />
      </div>
    </div>
  );
};

export default Signin;
