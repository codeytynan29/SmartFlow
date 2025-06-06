import React, { useState } from 'react';
import SparkChat from './SparkChat';
import MessageInbox from './MessageInbox';
import Calendar from './Calendar';
import DailySchedule from './DailySchedule';

const HomeDashboard = ({ onLogout }) => {
  const [view, setView] = useState('chat');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOpenDay = (date) => {
    setSelectedDate(date);
    setView('day');
  };

  // 🆕 Button menu
  const menuItems = [
    { key: 'chat', label: 'Spark 💬' },
    { key: 'inbox', label: 'Inbox 📬' },
    { key: 'calendar', label: 'Calendar 📆' },
    { key: 'day', label: 'Daily Schedule 🗓️' },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      {/* 🧭 Navigation bar */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        {menuItems.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setView(key)}
            style={{
              padding: '10px 16px',
              border: 'none',
              backgroundColor: view === key ? '#336699' : '#ddd',
              color: view === key ? '#fff' : '#000',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            {label}
          </button>
        ))}
        {/* Optional logout button */}
        {onLogout && (
          <button
            onClick={onLogout}
            style={{
              marginLeft: 'auto',
              padding: '10px 16px',
              backgroundColor: '#cc0000',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        )}
      </div>

      {/* 🔁 Conditional views */}
      {view === 'chat' && <SparkChat userTier="pro" />}
      {view === 'inbox' && <MessageInbox />}
      {view === 'calendar' && <Calendar onOpenDay={handleOpenDay} />}
      {view === 'day' && <DailySchedule date={selectedDate} />}
    </div>
  );
};

export default HomeDashboard;
