import React, { useState } from 'react';
import CompanyCard from './components/CompanyCard';

const SparkChat = () => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = { from: 'user', text: message };
    setChatLog([...chatLog, userMessage]);
    setMessage('');

    try {
      const response = await fetch('/api/spark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          userTier: 'free', // or 'pro'
          zip: '90210' // Replace with actual zip input or location
        }),
      });

      const data = await response.json();
      const sparkReply = {
        from: 'spark',
        reply: data.reply,
        companies: data.companies || []
      };

      setChatLog((prev) => [...prev, sparkReply]);
    } catch (err) {
      console.error(err);
      const errorReply = {
        from: 'spark',
        reply: 'Something went wrong. Spark is unavailable right now.',
        companies: []
      };
      setChatLog((prev) => [...prev, errorReply]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chat with Spark</h2>

      <div style={{ marginBottom: '20px' }}>
        {chatLog.map((msg, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            {msg.from === 'user' && (
              <div><strong>You:</strong> {msg.text}</div>
            )}

            {msg.from === 'spark' && (
              <div>
                <strong>Spark:</strong>
                <p>{msg.reply}</p>

                {msg.companies?.length > 0 && (
                  <div style={{ marginTop: '12px' }}>
                    <h4>Recommended HVAC Companies:</h4>
                    {msg.companies.map((company, i) => (
                      <CompanyCard
                        key={i}
                        name={company.name}
                        address={company.address}
                        website={company.website}
                        isVerified={company.verifiedPro}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Type your question..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '80%', padding: '8px' }}
      />
      <button onClick={handleSend} style={{ padding: '8px 16px', marginLeft: '10px' }}>
        Send
      </button>
    </div>
  );
};

export default SparkChat;
