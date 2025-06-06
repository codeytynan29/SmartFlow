import React, { useState, useEffect } from 'react';
import SparkChat from './SparkChat';
import MessageInbox from './MessageInbox';
import Calendar from './Calendar';
import DailySchedule from './DailySchedule';
import CustomChecklist from './CustomChecklist';
import { fetchProFeatureFlags } from './utils/getProFeatures';

const HomeDashboard = ({ onLogout }) => {
  const [view, setView] = useState('chat');
  const [selectedDate, setSelectedDate] = useState(null);
  const [features, setFeatures] = useState({});

  useEffect(() => {
    fetchProFeatureFlags().then(setFeatures);
  }, []);

  const handleOpenDay = (date) => {
    setSelectedDate(date);
    setView('day');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      {/* Navigation bar */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <button
          onClick={() => setView('chat')}
          style={navStyle(view === 'chat')}
        >
          Spark 💬
        </button>
        <button
          onClick={() => setView('inbox')}
          style={navStyle(view === 'inbox')}
        >
          Inbox 📬
        </button>
        <button
          onClick={() => setView('calendar')}
          style={navStyle(view === 'calendar')}
        >
          Calendar 📆
        </button>
        <button
          onClick={() => setView('day')}
          style={navStyle(view === 'day')}
        >
          Daily Schedule 🗓️
        </button>

        {features.customChecklists && (
          <button
            onClick={() => setView('checklists')}
            style={navStyle(view === 'checklists')}
          >
            Custom Checklists ✔️
          </button>
        )}

        {features.diagnosticsLog && (
          <button
            onClick={() => setView('diagnostics')}
            style={navStyle(view === 'diagnostics')}
          >
            Diagnostics 🧪
          </button>
        )}

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

      {/* View rendering */}
      {view === 'chat' && <SparkChat userTier="pro" />}
      {view === 'inbox' && <MessageInbox />}
      {view === 'calendar' && <Calendar onOpenDay={handleOpenDay} />}
      {view === 'day' && <DailySchedule date={selectedDate} />}
      {view === 'checklists' && <CustomChecklist />}
      {view === 'diagnostics' && <div>📋 Diagnostic tools go here</div>}
    </div>
  );
};

// Button styling helper
const navStyle = (active) => ({
  padding: '10px 16px',
  backgroundColor: active ? '#336699' : '#ddd',
  color: active ? '#fff' : '#000',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
});

export default HomeDashboard;
