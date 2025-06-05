import React, { useState } from 'react';

const TechLogin = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Replace with real authentication logic
    alert(`Logging in as ${email}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Technician Login</h2>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <button onClick={handleLogin} style={{ marginRight: '10px' }}>Login</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default TechLogin;
