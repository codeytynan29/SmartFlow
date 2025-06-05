import React, { useState } from 'react';
import MessageInbox from './MessageInbox';

const ProDashboard = ({ onLogout }) => {
  const [view, setView] = useState('dashboard');

  if (view === 'inbox') {
    return <MessageInbox onBack={() => setView('dashboard')} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome to the Pro Dashboard</h2>
      <p>You now have access to technician tools, diagnostics, and job history.</p>

      <button onClick={() => setView('inbox')} style={{ marginRight: '10px' }}>
        Inbox
      </button>
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default ProDashboard;
