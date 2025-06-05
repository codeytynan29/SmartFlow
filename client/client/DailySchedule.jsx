import React, { useState } from 'react';

const defaultHours = Array.from({ length: 12 }, (_, i) => `${i + 8}:00 AM`).concat(
  Array.from({ length: 8 }, (_, i) => `${i + 1}:00 PM`)
);

const DailySchedule = ({ date, onBack }) => {
  const [notes, setNotes] = useState({});

  const handleNoteChange = (hour, text) => {
    setNotes((prev) => ({ ...prev, [hour]: text }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Schedule for {date}</h2>

      {defaultHours.map((hour) => (
        <div key={hour} style={{ marginBottom: '10px' }}>
          <strong>{hour}</strong>
          <input
            type="text"
            value={notes[hour] || ''}
            onChange={(e) => handleNoteChange(hour, e.target.value)}
            style={{ width: '100%', padding: '6px' }}
            placeholder="Enter reminder..."
          />
        </div>
      ))}

      <button onClick={onBack} style={{ marginTop: '20px' }}>Back to Calendar</button>
    </div>
  );
};

export default DailySchedule;
