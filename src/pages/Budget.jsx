import React, { useState, useEffect } from "react";
import "../css/Budget.css";

const Budget = () => {
  const [budget, setBudget] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedBudget = localStorage.getItem("budget");
    const savedIncome = localStorage.getItem("income");
    const savedExpenses = localStorage.getItem("expenses");

    if (savedBudget) setBudget(parseFloat(savedBudget));
    if (savedIncome) setIncome(parseFloat(savedIncome));
    if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
  }, []);

  useEffect(() => {
    localStorage.setItem("budget", budget);
    localStorage.setItem("income", income);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [budget, income, expenses]);

  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const remainingBalance = income - totalExpenses;

  const addExpense = (description, amount, category) => {
    const newExpense = { description, amount: parseFloat(amount), category };
    if (editIndex !== null) {
      const updatedExpenses = [...expenses];
      updatedExpenses[editIndex] = newExpense;
      setExpenses(updatedExpenses);
      setEditIndex(null);
    } else {
      setExpenses([...expenses, newExpense]);
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const editExpense = (index) => {
    const expenseToEdit = expenses[index];
    setEditIndex(index);
  };

  return (
    <div className="budget-page">
      <h1>Welcome To your Budget Planner</h1>

      <div className="budget-summary">
        <label>Set Budget:</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(parseFloat(e.target.value))}
        />

        <div className="bar-container">
          <div
            className="bar income-bar"
            style={{ width: `${Math.min(100, (income / budget) * 100)}%` }}
          >
            ${income.toFixed(2)}
          </div>
        </div>

        <div className="bar-container">
          <div
            className="bar expenses-bar"
            style={{
              width: `${Math.min(100, (totalExpenses / budget) * 100)}%`,
            }}
          >
            ${totalExpenses.toFixed(2)}
          </div>
        </div>

        <div className="bar-container">
          <div
            className="bar remaining-bar"
            style={{
              width: `${Math.min(100, (remainingBalance / budget) * 100)}%`,
            }}
          >
            ${remainingBalance.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="income-section">
        <h2>Income After Tax</h2>
        <input
          type="number"
          placeholder="Enter income"
          value={income}
          onChange={(e) => setIncome(parseFloat(e.target.value))}
        />
      </div>

      <div className="expenses-section">
        <h2>Expenses</h2>
        <ExpenseForm
          addExpense={addExpense}
          editIndex={editIndex}
          expenses={expenses}
        />
        <ExpenseList
          expenses={expenses}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
        />
      </div>
    </div>
  );
};

const ExpenseForm = ({ addExpense, editIndex, expenses }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      const expense = expenses[editIndex];
      setDescription(expense.description);
      setAmount(expense.amount);
      setCategory(expense.category);
    }
  }, [editIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category) {
      addExpense(description, amount, category);
      setDescription("");
      setAmount("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Housing">Housing</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>
      <button type="submit">
        {editIndex !== null ? "Edit" : "Add"} Expense
      </button>
    </form>
  );
};

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => (
  <ul>
    {expenses.map((expense, index) => (
      <li key={index}>
        <span>
          {expense.description}: ${expense.amount.toFixed(2)} (
          {expense.category})
        </span>
        <button className="ed" onClick={() => editExpense(index)}>
          Edit
        </button>
        <button className="del" onClick={() => deleteExpense(index)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default Budget;
