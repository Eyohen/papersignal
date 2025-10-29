import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

import DashboardOverview from './pages/dashboard/Overview';
import DashboardAnalytics from './pages/dashboard/Analytics';
import DashboardSettings from './pages/dashboard/Settings';
import DashboardChat from './pages/dashboard/Chat';
import DashboardEmail from './pages/dashboard/Email';
import DashboardBilling from './pages/dashboard/Billing';
import DashboardTeam from './pages/dashboard/Team';

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      {/* Protected Dashboard Routes */}
      <Route path="/dashboard" element={<ProtectedRoute><DashboardOverview /></ProtectedRoute>} />
      <Route path="/dashboard/analytics" element={<ProtectedRoute><DashboardAnalytics /></ProtectedRoute>} />
      <Route path="/dashboard/settings" element={<ProtectedRoute><DashboardSettings /></ProtectedRoute>} />
      <Route path="/dashboard/chat" element={<ProtectedRoute><DashboardChat /></ProtectedRoute>} />
      <Route path="/dashboard/email" element={<ProtectedRoute><DashboardEmail /></ProtectedRoute>} />
      <Route path="/dashboard/billing" element={<ProtectedRoute><DashboardBilling /></ProtectedRoute>} />
      <Route path="/dashboard/team" element={<ProtectedRoute><DashboardTeam /></ProtectedRoute>} />
    </Routes>
  );
};

export default App;