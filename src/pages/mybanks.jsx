import React, { useState } from 'react';
import BankCard from '../components/BankCard';
import IntegrateCard from '../components/IntegrateCard';
import '../css/MyBanks.css'; // Import your CSS file

const MyBanks = ({ title, subtitle }) => {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Add new card to the list
  const addCard = (newCard) => {
    if (cards.length < 5) {
      setCards([...cards, newCard]);
      setShowForm(false);
    }
  };

  return (
    <div className="my-bankscard">
      <div className="welcome-message">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="card-grid">
        {cards.map((card, index) => (
          <BankCard
            key={index}
            type={card.type}
            holderName={card.holderName}
            cardNumber={card.cardNumber}
          />
        ))}
        {cards.length < 5 && (
          <div className="add-card" onClick={() => setShowForm(true)}>
            <i className="fas fa-plus"></i> Add Card
          </div>
        )}
      </div>
      {showForm && <IntegrateCard onAddCard={addCard} />}
    </div>
  );
};

export default MyBanks;
