import React, { useEffect, useState } from 'react';

const dummyMessages = [
  { id: 1, title: "Welcome to SmartFlow!", body: "Thanks for joining. Get started by exploring Spark AI." },
  { id: 2, title: "New Feature: Calendar", body: "You can now schedule service tasks and reminders with our new calendar tool." },
  { id: 3, title: "System Tip", body: "Change your air filters every 30–90 days for optimal performance." },
];

const MessageInbox = ({ onBack }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Replace with a real fetch later (e.g., from Firestore)
    setMessages(dummyMessages);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Inbox</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {messages.map((msg) => (
            <li key={msg.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              <strong>{msg.title}</strong>
              <p>{msg.body}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default MessageInbox;
