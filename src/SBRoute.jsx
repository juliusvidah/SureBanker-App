// src/SBRoute.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Home from './pages/Home';
import Budget from './pages/Budget';
import Transaction from './pages/Transaction';
import Transfer from './pages/Transfer';
import Mybanks from './pages/mybanks';
import Advice from './pages/Advice';
import Profile from './components/Profile';

const SBRoute = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/home" element={<Home title="Welcome Samuel" subtitle="Access & manage your account and transactions efficiently." />} />
          <Route path="/budget" element={<Budget title="Budget" subtitle="Plan your finances wisely." />} />
          <Route path="/transaction" element={<Transaction title="Transactions" subtitle="View your transaction history." />} />
          <Route path="/transfer" element={<Transfer title="Transfer" subtitle="Easily transfer funds." />} />
          <Route path="/mybanks" element={<Mybanks title="My Banks" subtitle="Manage your bank accounts." />} />
          <Route path="/advice" element={<Advice title="Advice" subtitle="Get expert financial advice." />} />
          <Route path="/profile" element={<Profile title="Profile" subtitle="Manage your personal profile." />} />
        </Routes>
      </main>
    </div>
  );
};

export default SBRoute;
