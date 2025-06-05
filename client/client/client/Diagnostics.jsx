import React, { useState } from 'react';

const Diagnostics = ({ onBack }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDiagnose = async () => {
    if (!input.trim()) return;
    setLoading(true);

    try {
      const res = await fetch('/api/spark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Symptom report: ${input}. Give detailed technical diagnostics.`,
          userTier: 'pro'
        })
      });

      const data = await res.json();
      setResponse(data.reply);
    } catch (err) {
      setResponse('Spark diagnostics are unavailable at the moment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Diagnostics Assistant</h2>

      <textarea
        placeholder="Describe the issue (e.g., no airflow, tripped breaker, etc.)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        style={{ width: '100%', padding: '10px' }}
      />

      <button onClick={handleDiagnose} style={{ marginTop: '10px' }}>
        {loading ? 'Analyzing...' : 'Run Diagnostics'}
      </button>

      {response && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap', background: '#f4f4f4', padding: '15px' }}>
          <strong>Results:</strong>
          <br />
          {response}
        </div>
      )}

      <button onClick={onBack} style={{ marginTop: '20px' }}>Back to Dashboard</button>
    </div>
  );
};

export default Diagnostics;
