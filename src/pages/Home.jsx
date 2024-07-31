// src/pages/Home.jsx
import React from 'react';
import Profile from '../components/Profile';
import TotalBalanceBox from '../components/TotalBalanceBox';
import RecentTransactions from '../components/RecentTransactions';
import '../css/Home.css'; // Assuming you create a CSS file for specific styling

const Home = ({ title, subtitle, accountNumber, accountsData }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="welcome">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className='bal'>
          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accountsData?.totalBanks}
            totalCurrentBalance={accountsData?.totalCurrentBalance}
          /></div>
          <div className='trans'>
          <RecentTransactions 
            accountNumber={accountNumber} // Pass account number or other required identifiers
          />
        </div>
      </div>
      <aside className="profile-sidebar">
        <Profile />
      </aside>
    </div>
  );
};

export default Home;
