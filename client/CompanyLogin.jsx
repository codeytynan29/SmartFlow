import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // TEMP login for now. Will connect to Firebase later.
    if (email === 'admin@hvaccompany.com' && password === 'securepass') {
      navigate('/company-dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Company Admin Login</h2>

      <input
        type="email"
        placeholder="Company Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: 10, marginBottom: 10 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: 10, marginBottom: 10 }}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default CompanyLogin;
