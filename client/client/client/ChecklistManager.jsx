import React, { useState } from 'react';

const ChecklistManager = ({ onBack }) => {
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Inspect air handler', checked: false },
    { id: 2, text: 'Test capacitor', checked: false },
  ]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (!newItem.trim()) return;
    const newEntry = {
      id: Date.now(),
      text: newItem.trim(),
      checked: false,
    };
    setChecklist((prev) => [...prev, newEntry]);
    setNewItem('');
  };

  const toggleItem = (id) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteItem = (id) => {
    setChecklist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Custom Checklist</h2>

      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Add checklist item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          style={{ padding: '6px', width: '70%' }}
        />
        <button onClick={handleAddItem} style={{ marginLeft: '10px' }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {checklist.map((item) => (
          <li key={item.id} style={{ marginBottom: '8px' }}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleItem(item.id)}
              style={{ marginRight: '10px' }}
            />
            {item.text}
            <button onClick={() => deleteItem(item.id)} style={{ marginLeft: '10px' }}>
              ❌
            </button>
          </li>
        ))}
      </ul>

      <button onClick={onBack} style={{ marginTop: '20px' }}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default ChecklistManager;
