import React, { useState } from 'react';
import MessageInbox from './MessageInbox';
import ChatHistory from './ChatHistory';
import SparkChat from './SparkChat';
import Calendar from './Calendar';
import DailySchedule from './DailySchedule';

const ProDashboard = ({ onLogout }) => {
  const [view, setView] = useState('dashboard');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOpenDay = (date) => {
    setSelectedDate(date);
    setView('day');
  };

  if (view === 'inbox') return <MessageInbox onBack={() => setView('dashboard')} />;
  if (view === 'history') return <ChatHistory onBack={() => setView('dashboard')} />;
  if (view === 'chat') return <SparkChat userTier="pro" />;
  if (view === 'calendar') return <Calendar onBack={() => setView('dashboard')} onOpenDay={handleOpenDay} />;
  if (view === 'day') return <DailySchedule date={selectedDate} onBack={() => setView('calendar')} />;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome to the Pro Dashboard</h2>
      <p>You now have access to technician tools, diagnostics, and job history.</p>

      <button onClick={() => setView('chat')} style={{ marginRight: '10px' }}>Open Spark</button>
      <button onClick={() => setView('history')} style={{ marginRight: '10px' }}>Chat History</button>
      <button onClick={() => setView('calendar')} style={{ marginRight: '10px' }}>Calendar</button>
      <button onClick={() => setView('inbox')} style={{ marginRight: '10px' }}>Inbox</button>
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default ProDashboard;
