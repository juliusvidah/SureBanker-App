import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const OTPInput = () => {
  const [otp, setOtp] = useState(""); // State to hold user input
  const [generatedOtp, setGeneratedOtp] = useState(""); // State to hold the generated OTP
  const [message, setMessage] = useState(""); // State to hold messages
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to generate a 4-digit OTP
  const generateOtp = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a random 4-digit OTP
    setGeneratedOtp(newOtp);
    setMessage(`Your OTP is: ${newOtp}`);
    setOtp(""); // Reset input field
  };
  // Function to handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,4}$/.test(value)) {
      // Allow only numbers up to 4 digits
      setOtp(value);
    }
  }; // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      setMessage("OTP verified successfully!"); // Redirect to login page after successful OTP verification
      setTimeout(() => {
        navigate("/Signin");
      }, 2000); // 2-second delay to show the success message before redirecting
    } else {
      setMessage("Incorrect OTP. Please try again.");
    }
  };
  return (
    <div>
      <button onClick={generateOtp}>Generate OTP</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="otp">Enter OTP:</label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={handleChange}
          maxLength="4"
          placeholder="Enter 4-digit OTP"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OTPInput;
