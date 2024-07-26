// Dash.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No Router here
import SideNavbar from './components/SideNavbar';
import Navbar from './components/Navbar';
import './App.css';

// Import your components for each dashboard route
import Dashboard from './pages/Dashboard';
import Tracker from './pages/Tracker';
import Transaction from './pages/Transaction';
import Target from './pages/Target';
import Advice from './pages/Advice';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const Dash = () => {
    return (
        <div className="dash">
            <Navbar />
            <SideNavbar />
            <div className="content">
                <Routes> {/* Only Routes, no Router */}
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="tracker" element={<Tracker />} />
                    <Route path="transaction" element={<Transaction />} />
                    <Route path="target" element={<Target />} />
                    <Route path="advice" element={<Advice />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dash;
