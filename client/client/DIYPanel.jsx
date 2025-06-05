import React from 'react';
import './DIYPanel.css';

const DIYPanel = ({ tools, steps }) => {
  return (
    <div className="diy-panel">
      <h2>DIY Option</h2>
      <h3>🧰 You’ll need:</h3>
      <ul>
        {tools.map((tool, index) => <li key={index}>{tool}</li>)}
      </ul>
      <h3>📝 Instructions:</h3>
      <ol>
        {steps.map((step, index) => <li key={index}>{step}</li>)}
      </ol>
    </div>
  );
};

export default DIYPanel;
