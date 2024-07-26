// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your components for non-dashboard routes
import LandingPage from './pages/LandingPage';
import Home from './components/Home';
import ResetPassword from './components/ResetPassword';
import ConfirmPassword from './components/ConfirmPassword';

// Import the Dash component for dashboard routes
import Dash from './dash'; // Import the Dash component

const App = () => {
    return (
        <Router> {/* Single Router for the entire app */}
            <Routes>
                <Route path="/" element={<LandingPage />} /> {/* Landing page as default */}
                <Route path="/home" element={<Home />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/confirmpassword" element={<ConfirmPassword />} />
                <Route path="/*" element={<Dash />} /> {/* Use Dash for dashboard routes */}
            </Routes>
        </Router>
    );
};

export default App;
