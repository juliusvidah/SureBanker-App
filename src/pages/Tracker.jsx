import React from 'react';
import '../css/Tracker.css';

const Tracker = () => {
    return (
        <div className="tracker-container">
            <div className="tracker-section">
                <h2>Savings</h2>
                <div className="tracker-metric">
                    <span className="metric-value">$15,000.00</span>
                    <span className="metric-label">Total Savings</span>
                </div>
                <div className="tracker-progress">
                    <div className="progress-bar" style={{ width: '75%' }}></div>
                </div>
            </div>
            <div className="tracker-section">
                <h2>Expenses</h2>
                <div className="tracker-metric">
                    <span className="metric-value">$5,000.00</span>
                    <span className="metric-label">Total Expenses</span>
                </div>
                <div className="tracker-progress">
                    <div className="progress-bar" style={{ width: '50%' }}></div>
                </div>
            </div>
            <div className="tracker-section">
                <h2>Investments</h2>
                <div className="tracker-metric">
                    <span className="metric-value">$10,000.00</span>
                    <span className="metric-label">Total Investments</span>
                </div>
                <div className="tracker-progress">
                    <div className="progress-bar" style={{ width: '60%' }}></div>
                </div>
            </div>
        </div>
    );
}

export default Tracker;
