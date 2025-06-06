import React, { useState } from 'react';
import SparkChat from './SparkChat'; // or wherever your SparkChat lives

const ChatWidget = () => {
  // “open” controls whether the full chat panel is visible
  const [open, setOpen] = useState(false);

  // Toggle between minimized icon and full chat window
  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <>
      {/* 
        1) If “open” is true, show the full SparkChat panel.
        2) If “open” is false, show only the small chat icon.
      */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',      // leave room for the icon below
            right: '20px',
            width: '320px',      // adjust width as you like
            height: '480px',     // adjust height as you like
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#fff',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header bar with a “close” button */}
          <div
            style={{
              backgroundColor: '#336699',
              padding: '8px 12px',
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span>Spark</span>
            <button
              onClick={toggleOpen}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                lineHeight: '1',
              }}
            >
              &times;
            </button>
          </div>

          {/* The actual SparkChat component */}
          <div style={{ flex: 1, background: '#f4f4f4' }}>
            <SparkChat userTier="free" /* or “pro” if you want to pass that down */ />
          </div>
        </div>
      )}

      {/* Always‐visible Chat Icon in the bottom‐right corner */}
      <div
        onClick={toggleOpen}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#336699',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          zIndex: 1000,
        }}
        title={open ? 'Close Chat' : 'Open Spark'}
      >
        {/* You can replace this with your Spark‐bolt icon SVG or an <img> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFF"
          width="32px"
          height="32px"
        >
          <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
        </svg>
      </div>
    </>
  );
};

export default ChatWidget;
