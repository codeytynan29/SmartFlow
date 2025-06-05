import React, { useState } from 'react';
import TechLogin from './TechLogin';
import HomeDashboard from './HomeDashboard';
import ProDashboard from './ProDashboard';
import UserTierPanel from './UserTierPanel';

function App() {
  const [userType, setUserType] = useState(null); // 'home' or 'pro'

  const handleHomeLogin = () => setUserType('home');
  const handleProLogin = () => setUserType('pro');
  const handleLogout = () => setUserType(null);

  if (userType === 'home') return <HomeDashboard onLogout={handleLogout} />;
  if (userType === 'pro') return <ProDashboard onLogout={handleLogout} />;

  return <UserTierPanel onHomeLogin={handleHomeLogin} onProLogin={handleProLogin} />;
}

export default App;
