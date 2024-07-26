import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faExchangeAlt, faBullseye, faLightbulb, faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import './SideNavbar.css';

const SideNavbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

    return (
        <div 
            className={`side-navbar ${isExpanded ? 'expanded' : ''}`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className="sblogo">
                <img src="https://res.cloudinary.com/duicyr28v/image/upload/v1721168513/surebanker_logo_aoy8rn.svg" alt="Logo" />
            </div>
            <Link to="/dashboard" className="nav-item">
                <FontAwesomeIcon icon={faHome} />
                <span>Dashboard</span>
            </Link>
            <Link to="/tracker" className="nav-item">
                <FontAwesomeIcon icon={faChartLine} />
                <span>Tracker</span>
            </Link>
            <Link to="/transaction" className="nav-item">
                <FontAwesomeIcon icon={faExchangeAlt} />
                <span>Transaction</span>
            </Link>
            <Link to="/target" className="nav-item">
                <FontAwesomeIcon icon={faBullseye} />
                <span>Target</span>
            </Link>
            <Link to="/advice" className="nav-item">
                <FontAwesomeIcon icon={faLightbulb} />
                <span>Advice</span>
            </Link>
            <Link to="/profile" className="nav-item">
                <FontAwesomeIcon icon={faUser} />
                <span>Profile</span>
            </Link>
            <Link to="/settings" className="nav-item">
                <FontAwesomeIcon icon={faCog} />
                <span>Settings</span>
            </Link>
        </div>
    );
};

export default SideNavbar;
