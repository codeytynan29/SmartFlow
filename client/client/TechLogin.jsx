import React, { useState } from 'react';

const TechLogin = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const exampleCode = 'ACME-TECH-2024'; // Replace with real validation later

    if (accessCode !== exampleCode) {
      setError('Invalid access code. Please contact your company administrator.');
      return;
    }

    // Proceed with login logic
    alert(`Logged in as ${email}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Technician Login</h2>

      <input
        type="email"
        placeholder="Email or Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <input
        type="text"
        placeholder="Access Code (e.g. ACME-TECH-2024)"
        value={accessCode}
        onChange={(e) => setAccessCode(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

      <button onClick={handleLogin} style={{ marginRight: '10px' }}>Login</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default TechLogin;
