import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  return (
    <div className="welcome-container">
      <div className="shield">
        <div className="hvac-icon">🛠️</div>
      </div>
      <h1 className="app-title">SmartFlow</h1>
    </div>
  );
};

export default WelcomeScreen;