import React from 'react';
import { Pie, PieChart, Cell, Tooltip } from 'recharts';
import '../css/TotalBalanceBox.css'; // Import the CSS file

const chartData = [
  { bank: "Bank 1", balance: 5000, fill: "#00c853" },
  { bank: "Bank 2", balance: 3000, fill: "#006d32" },
  { bank: "Bank 3", balance: 2000, fill: "#a5d6a7" },
  { bank: "Bank 4", balance: 1500, fill: "#ff5722" },
  { bank: "Bank 5", balance: 1200, fill: "#4caf50" },
];

const TotalBalanceBox = ({ totalBanks, totalCurrentBalance }) => {
  return (
    <div className="total-balance-box">
      <div className="chart-container">
        <PieChart width={200} height={200}>
          <Pie
            data={chartData}
            dataKey="balance"
            nameKey="bank"
            innerRadius={50}
            outerRadius={70}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className="details">
        <h2 className="total-banks">Bank Accounts: {totalBanks}</h2>
        <div className="balance-info">
          <p className="balance-label">Total Current Balance</p> $4000
          <div className="balance-amount">
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBalanceBox;
