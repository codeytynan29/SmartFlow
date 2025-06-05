import React, { useState } from 'react';
import SparkChat from './SparkChat';
import MessageInbox from './MessageInbox';
import Calendar from './Calendar';
import DailySchedule from './DailySchedule';

const HomeDashboard = ({ onLogout }) => {
  const [view, setView] = useState('dashboard');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOpenDay = (date) => {
    setSelectedDate(date);
    setView('day');
  };

  if (view === 'chat') return <SparkChat userTier="free" />;
  if (view === 'inbox') return <MessageInbox onBack={() => setView('dashboard')} />;
  if (view === 'calendar') return <Calendar onBack={() => setView('dashboard')} onOpenDay={handleOpenDay} />;
  if (view === 'day') return <DailySchedule date={selectedDate} onBack={() => setView('calendar')} />;

  return (
    <div style={{
      padding: '30px',
      background: '#f4faff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: '#ffffff',
        borderRadius: '12px',
        padding: '25px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#0077cc' }}>Welcome to SmartFlow</h2>
        <p style={{ marginBottom: '20px' }}>
          I’m Spark — your home comfort assistant. What can I help with today?
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button onClick={() => setView('chat')} style={buttonStyle}>💬 Ask Spark</button>
          <button onClick={() => setView('calendar')} style={buttonStyle}>📅 Calendar</button>
          <button onClick={() => setView('inbox')} style={buttonStyle}>📨 Inbox</button>
          <button onClick={onLogout} style={{ ...buttonStyle, backgroundColor: '#ddd' }}>🚪 Log Out</button>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '12px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#0077cc',
  color: 'white',
  cursor: 'pointer',
  transition: 'background 0.2s'
};

export default HomeDashboard;
