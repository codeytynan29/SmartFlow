import React, { useState } from 'react';

const SparkChat = ({ userTier = 'free' }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: 'user', content: input };
    setMessages([...messages, newMessage]);

    setInput('');

    const response = await fetch('/api/spark', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input, userTier }),
    });

    const data = await response.json();
    const botReply = { role: 'assistant', content: data.reply };
    setMessages((prev) => [...prev, botReply]);
  };

  const handleSave = () => {
    const transcript = messages.map(m => `${m.role === 'user' ? 'You' : 'Spark'}: ${m.content}`).join('\n\n');
    alert('Feature for Pro users only: Save and send this transcript via email or history.');
    console.log('Transcript:\n', transcript);
    // Add future logic here to store or email transcript
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Spark AI Assistant</h2>

      <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{msg.role === 'user' ? 'You' : 'Spark'}:</strong> {msg.content}
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '80%', padding: '10px', marginTop: '10px' }}
      />
      <button onClick={sendMessage} style={{ marginLeft: '10px' }}>Send</button>

      {userTier === 'pro' && (
        <button onClick={handleSave} style={{ display: 'block', marginTop: '15px' }}>
          Save Conversation
        </button>
      )}
    </div>
  );
};

export default SparkChat;
