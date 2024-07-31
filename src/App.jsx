// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import SBRoute from './SBRoute'; // Import SBRoute component
import OTPInput from './Auth/OTPInput';
import Reset from './Auth/Reset';

function App() {
  return (
    <div>
      <Routes>
        {/* Default route to landing page */}
        <Route path="/" element={<Landingpage />} />
        
        {/* Authentication routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otpinput" element={<OTPInput />} />
        <Route path="/reset" element={<Reset />} />
        
        {/* All other routes handled by SBRoute */}
        <Route path="/*" element={<SBRoute />} />
      </Routes>
    </div>
  );
}

export default App;
