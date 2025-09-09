import React, { useState } from 'react';
import axios from 'axios';
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home';
// import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
// import Documentation from './pages/Documentation';

// Layout
// import DashboardLayout from './components/dashboardLayout';

// Pages
// import Dashboard from './pages/Dashboard';
// import Campaigns from './pages/Campaigns';
// import Analytics from './pages/Analytics';
// import Subscribers from './pages/Subscribers';
// import Templates from './pages/Templates';
// import Billing from './pages/Billing';
// import VerifyEmail from './pages/VerifyEmail';
// import Settings from './pages/Settings';
// import Help from './pages/Help';
// import NotFound from './pages/NotFound';

import DashboardOverview from './pages/dashboard/Overview';
import DashboardAnalytics from './pages/dashboard/Analytics';
import DashboardSettings from './pages/dashboard/Settings';
import DashboardChat from './pages/dashboard/Chat';
import DashboardEmail from './pages/dashboard/Email';
import DashboardBilling from './pages/dashboard/Billing';
import DashboardTeam from './pages/dashboard/Team';


const App = () => {

  const isAuthenticated = true;

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      {/* <Route path="/verify-email" element={<VerifyEmail />} />
  <Route path="/documentation" element={<Documentation />} /> */}

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardOverview />} />
      <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
      <Route path="/dashboard/settings" element={<DashboardSettings />} />
      <Route path="/dashboard/chat" element={<DashboardChat />} />
      <Route path="/dashboard/email" element={<DashboardEmail/>} />
      <Route path="/dashboard/billing" element={<DashboardBilling />} />
      <Route path="/dashboard/team" element={<DashboardTeam />} />

      {/* 404 Page */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App