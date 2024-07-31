import React from 'react';
import '../css/RecentTransactions.css'; // Import your CSS file

const transactions = [
  { transaction: 'Payment to Vendor A', amount: '$200.00', status: 'Completed', date: '2024-07-01', category: 'Business' },
  { transaction: 'Refund from Vendor B', amount: '$50.00', status: 'Pending', date: '2024-07-02', category: 'Personal' },
  { transaction: 'Salary Deposit', amount: '$2,500.00', status: 'Completed', date: '2024-07-03', category: 'Income' },
  // Add more transactions as needed
];

const RecentTransactions = () => {
  return (
    <div className="recent-transactions">
      <h2>Recent Transactions</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.transaction}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.status}</td>
              <td>{transaction.date}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTransactions;
