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
    <div style={{ padding: '20px' }}>
      <h2>Welcome to SmartFlow</h2>
      <p>Your home comfort assistant is here to help. Choose a tool below:</p>

      <button onClick={() => setView('chat')} style={{ marginRight: '10px' }}>Ask Spark</button>
      <button onClick={() => setView('calendar')} style={{ marginRight: '10px' }}>Calendar</button>
      <button onClick={() => setView('inbox')} style={{ marginRight: '10px' }}>Inbox</button>
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default HomeDashboard;
