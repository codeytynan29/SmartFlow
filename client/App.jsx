import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Your existing home component
import SparkChat from './SparkChat'; // AI assistant
import TechLogin from './TechLogin'; // Tech login
import CompanyLogin from './CompanyLogin'; // 👈 Newly added

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spark" element={<SparkChat />} />
        <Route path="/tech-login" element={<TechLogin />} />
        <Route path="/company-login" element={<CompanyLogin />} /> {/* 👈 New Route */}
      </Routes>
    </Router>
  );
}

export default App;
