import React from 'react';

const ProDashboard = ({ onLogout }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome to the Pro Dashboard</h2>
      <p>You now have access to technician tools, diagnostics, and job history.</p>
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default ProDashboard;
