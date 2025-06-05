import React, { useState } from 'react';

const dummyHistory = [
  {
    id: 'chat1',
    timestamp: '2025-06-05 10:30 AM',
    transcript: [
      { role: 'user', content: 'Why is my AC not blowing cold air?' },
      { role: 'assistant', content: 'It could be a clogged filter or low refrigerant.' }
    ]
  },
  {
    id: 'chat2',
    timestamp: '2025-06-04 4:15 PM',
    transcript: [
      { role: 'user', content: 'What does a flashing red light on the unit mean?' },
      { role: 'assistant', content: 'That’s often a fault code. You’ll want to check the diagnostic chart for your model.' }
    ]
  }
];

const ChatHistory = ({ onBack }) => {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <div style={{ padding: '20px' }}>
        <h3>Chat from {selected.timestamp}</h3>
        <div style={{ whiteSpace: 'pre-wrap', border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
          {selected.transcript.map((msg, idx) => (
            <div key={idx}>
              <strong>{msg.role === 'user' ? 'You' : 'Spark'}:</strong> {msg.content}
            </div>
          ))}
        </div>
        <button onClick={() => setSelected(null)}>Back to History</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chat History</h2>
      {dummyHistory.map((entry) => (
        <div
          key={entry.id}
          onClick={() => setSelected(entry)}
          style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', cursor: 'pointer' }}
        >
          <strong>{entry.timestamp}</strong>
          <div>{entry.transcript[0]?.content.slice(0, 40)}...</div>
        </div>
      ))}
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default ChatHistory;
