import React from 'react';
// { useContext }
import { Routes, Route } from 'react-router-dom'
//Navigate, useNavigate

import { AuthProvider } from "./contexts/auth";
//AuthContext

import Login from "./pages/Login";
import AboutSystem from './pages/AboutSystem';
import SignUp from './pages/SignUp';

const Paths = () => {

  return (
    <AuthProvider>
        
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<SignUp />} />
        <Route path="/sobre" element={<AboutSystem />} />
      </Routes>

    </AuthProvider>
  );
}

export default Paths;