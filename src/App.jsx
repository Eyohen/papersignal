import React, { useState } from 'react';
import axios from 'axios';
import {Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Documentation from './pages/Documentation';

// Layout
import DashboardLayout from './components/layout/DashboardLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Campaigns from './pages/Campaigns';
import Analytics from './pages/Analytics';
import Subscribers from './pages/Subscribers';
import Templates from './pages/Templates';
import Billing from './pages/Billing';
// import Settings from './pages/Settings';
// import Help from './pages/Help';
// import NotFound from './pages/NotFound';


const App = () => {

  const isAuthenticated = true;

return (
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Register />} />
  <Route path="/documentation" element={<Documentation />} />
 

      {/* Protected routes with dashboard layout */}
      <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/campaigns" 
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Campaigns />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/analytics" 
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Analytics />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/subscribers" 
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Subscribers />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/templates" 
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Templates />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
     <Route 
          path="/billing" 
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Billing />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        {/*    <Route 
          path="/settings" 
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/help" 
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Help />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        /> */}
        
        {/* Default redirect to dashboard */}
        <Route path="/dashboard" element={<Navigate to="/dashboard" replace />} />
        
        {/* 404 Page */}
        {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
)
}

export default App