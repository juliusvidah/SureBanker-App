import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='welcome'>
        <h1>Welcome to SureBanker</h1>
        <p>Hi X Welcome Back</p>
      </div>
      
      <div className="icons">
        <LazyLoadImage
          src="https://res.cloudinary.com/duicyr28v/image/upload/v1721232656/carbon_notification_z6fh4e.png"
          alt="Notifications"
          effect="blur"
          className="icon"
        />
        <div className="dropdown">
          <LazyLoadImage
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1721232718/Profile_dark_mode_kppiwm.png"
            alt="User"
            effect="blur"
            className="icon"
          />
          <div className="dropdown-content">
            <a href="#">Username</a>
            <a href="#">Account</a>
            <a href="#">Help</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
