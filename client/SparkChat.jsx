import React, { useState } from 'react';
import './SparkChat.css';
import DIYPanel from './DIYPanel';

const SparkChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [diyInfo, setDiyInfo] = useState(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
      const response = await fetch('http://localhost:3001/api/spark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await response.json();
      const reply = data.reply;

      // Look for DIY tag
      if (reply.startsWith("DIY:")) {
        const [_, toolPart, stepPart] = reply.split(/DIY:|\-|\>/g);
        const tools = toolPart?.split(',').map(t => t.trim()) || [];
        const steps = stepPart?.split('>').map(s => s.trim()) || [];
        setDiyInfo({ tools, steps });
      } else {
        setDiyInfo(null);
      }

      setMessages(prev => [...prev, { text: reply, sender: 'spark' }]);
    } catch (err) {
      setMessages(prev => [...prev, { text: 'Error getting response.', sender: 'spark' }]);
    }
  };

  return (
    <div className="spark-chat-window">
      <div className="spark-header">Spark</div>
      <div className="spark-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {diyInfo && <DIYPanel tools={diyInfo.tools} steps={diyInfo.steps} />}
      </div>
      <div className="spark-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default SparkChat;