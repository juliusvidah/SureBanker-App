import React, { useState } from 'react';
import '../css/signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    state: '',
    dob: '',
    email: '',
    password: '',
    country: '', // Add country field
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <header className="signup-header">
        <img src="https://res.cloudinary.com/duicyr28v/image/upload/v1722374889/SB_LOGO_yixwfz.svg" alt="Horizon Logo" className="signin-logo" />
        
          <h1>Sign up</h1>
          <p>Please enter your details.</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="ex: John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="ex: Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Enter your specific address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select your country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Algeria">Algeria</option>                </select>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-primary">
            Sign up
          </button>
        </form>
        <div className="signup-prompt">
          Already have an account? <a href="/signin">Login</a>
        </div>
      </div>
      <div className="signup-image">
        <img src="https://res.cloudinary.com/duicyr28v/image/upload/v1722360808/Design_Glow_GIF_by_xponentialdesign_-_Find_Share_on_GIPHY_cjixtn.gif" alt="Background" />
      </div>
    </div>
  );
};

export default Signup;
