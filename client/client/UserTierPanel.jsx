import React from 'react';
import './UserTierPanel.css';

const UserTierPanel = ({ userTier, setUserTier, zip, setZip, onProPage }) => {
  return (
    <div className="tier-panel">
      <h3>Who are you?</h3>
      <div className="tier-buttons">
        <button
          className={userTier === 'free' ? 'active' : ''}
          onClick={() => setUserTier('free')}
        >
          Homeowner
        </button>
        <button
          className={userTier === 'pro' ? 'active' : ''}
          onClick={() => setUserTier('pro')}
        >
          Technician
        </button>
      </div>

      <div className="zip-entry">
        <label>ZIP Code:</label>
        <input
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="e.g. 07874"
        />
      </div>

      {userTier === 'pro' && (
        <div style={{ marginTop: '10px' }}>
          <button onClick={onProPage}>Go to Pro Page</button>
        </div>
      )}
    </div>
  );
};

export default UserTierPanel;