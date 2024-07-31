// src/components/Sidebar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faWallet,
  faExchangeAlt,
  faArrowRight,
  faUniversity,
  faLightbulb,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Ensure correct path to your CSS file

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img
          src="https://res.cloudinary.com/duicyr28v/image/upload/v1721168513/surebanker_logo_aoy8rn.svg"
          alt="Company Logo"
          className="company-logo"
        />
        <h1 className="company-name">SureBanker</h1>
      </div>
      <div className="sidebar-content">
        <Link to="/home" className="nav-item">
          <FontAwesomeIcon icon={faHome} />
          <span className="topic">Home</span>
        </Link>
        <Link to="/budget" className="nav-item">
          <FontAwesomeIcon icon={faWallet} />
          <span className="topic">Budget</span>
        </Link>
        <Link to="/transaction" className="nav-item">
          <FontAwesomeIcon icon={faExchangeAlt} />
          <span className="topic">Transaction</span>
        </Link>
        <Link to="/transfer" className="nav-item">
          <FontAwesomeIcon icon={faArrowRight} />
          <span className="topic">Transfer</span>
        </Link>
        <Link to="/mybanks" className="nav-item">
          <FontAwesomeIcon icon={faUniversity} />
          <span className="topic">My Banks</span>
        </Link>
        <Link to="/advice" className="nav-item">
          <FontAwesomeIcon icon={faLightbulb} />
          <span className="topic">Advice</span>
        </Link>
        <div className="indicator"></div>
      </div>
      <div className="sidebar-footer">
        <div className="user-info">
          <img src="path/to/avatar.jpg" alt="User Avatar" className="avatar" />
          <div className="user-details">
            <span className="user-name">User Name</span>
            <span className="user-email">user@example.com</span>
          </div>
        </div>
        <button className="logout-button">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
