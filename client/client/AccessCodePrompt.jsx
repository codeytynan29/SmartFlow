import React, { useState } from 'react';

const AccessCodePrompt = ({ onSuccess, onCancel }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const validateCode = () => {
    const correctCode = 'HVAC2024'; // You can change this
    if (code === correctCode) {
      onSuccess();
    } else {
      setError('Invalid code. Try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Enter Technician Access Code</h3>
      <input
        type="password"
        placeholder="Access Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ padding: '8px', width: '100%' }}
      />
      {error && <div style={{ color: 'red', marginTop: '8px' }}>{error}</div>}
      <div style={{ marginTop: '12px' }}>
        <button onClick={validateCode} style={{ marginRight: '10px' }}>Continue</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AccessCodePrompt;
