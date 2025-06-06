import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SparkChat from './SparkChat';
import TechLogin from './TechLogin';
import CompanyLogin from './CompanyLogin';
import CompanyDashboard from './CompanyDashboard';
import ChatWidget from './ChatWidget'; // ✅ Spark icon/chat

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spark" element={<SparkChat />} />
        <Route path="/tech-login" element={<TechLogin />} />
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
        {/* Add any additional routes as needed */}
      </Routes>

      {/* ✅ Persistent Spark chat icon on all pages */}
      <ChatWidget />
    </Router>
  );
}

export default App;
