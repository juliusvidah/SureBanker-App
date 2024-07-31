import React, { useState } from 'react';
import '../css/Profile.css'; // Import your CSS file
import BankCard from './BankCard';
import IntegrateCard from './IntegrateCard';

const Profile = ({ user = {}, banks = [] }) => {
  const [showForm, setShowForm] = useState(false);
  const [cardList, setCardList] = useState(banks);

  const addCard = (newCard) => {
    if (cardList.length < 5) {
      setCardList([...cardList, { ...newCard, $id: Date.now() }]);
      setShowForm(false);
    }
  };

  return (
    <section className="profile-container">
      <div className="profile-banner"></div>
      <div className="profile-content">
        <div className="profile-img">
          <span className="profile-initial">
            {user.initials || 'N/A'}
          </span>
        </div>
        <div className="profile-details">
          <h1 className="profile-name">
            {user.name || 'N/A'}
          </h1>
          <p className="profile-email">{user.email || 'N/A'}</p>
        </div>
      </div>

      <section className="banks-section">
        <div className="banks-header">
          <h2 className="header-2">My Banks</h2>
          <div className="add-bank-link" onClick={() => setShowForm(true)}>
            <img src="/icons/plus.svg" width={10} height={10} alt="plus" />
            <h2 className="add-bank-text">Add Bank</h2>
          </div>
        </div>

        <div className="banks-container">
          {cardList.length > 0 ? (
            cardList.map((bank) => (
              <div className="bank-card-wrapper" key={bank.$id}>
                <BankCard
                  type={bank.type}
                  holderName={bank.holderName}
                  cardNumber={bank.cardNumber}
                />
              </div>
            ))
          ) : (
            <p>No cards available. Add a card to get started.</p>
          )}
          {cardList.length < 5 && (
            <div className="bank-card-wrapper add-new" onClick={() => setShowForm(true)}>
              <i className="fas fa-plus fa-2x"></i>
            </div>
          )}
        </div>

        {showForm && <IntegrateCard onAddCard={addCard} />}
      </section>
    </section>
  );
};

export default Profile;
