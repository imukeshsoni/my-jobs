import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import HomePage from './pages/homePage';
import LoginPage from './components/Login';
import Dashboard from './pages/Dashboard/index';
import ResetPassword from './components/ResetPassword';

const BaseRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/postjob" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default BaseRouter;
