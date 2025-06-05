import React, { useState } from 'react';

const getToday = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}`; // e.g., "2025-6"
};

const Calendar = ({ onBack, onOpenDay }) => {
  const [currentMonth, setCurrentMonth] = useState(getToday());

  const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

  const renderDays = () => {
    const [year, month] = currentMonth.split('-').map(Number);
    const totalDays = daysInMonth(year, month);

    const days = [];
    for (let i = 1; i <= totalDays; i++) {
      const date = `${year}-${month}-${i}`;
      days.push(
        <div
          key={date}
          onClick={() => onOpenDay(date)}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '5px',
            cursor: 'pointer',
            flex: '1 0 21%',
            textAlign: 'center',
          }}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Calendar</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{renderDays()}</div>
      <button onClick={onBack} style={{ marginTop: '20px' }}>Back</button>
    </div>
  );
};

export default Calendar;
