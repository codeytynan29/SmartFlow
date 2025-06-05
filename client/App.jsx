import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import SparkChat from './SparkChat';

const App = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {showChat ? (
        <SparkChat />
      ) : (
        <div onClick={() => setShowChat(true)}>
          <WelcomeScreen />
        </div>
      )}
    </>
  );
};

export default App;
