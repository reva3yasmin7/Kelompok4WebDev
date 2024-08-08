// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import HRRegister from './pages/HRRegister';
import ChatBot from './components/ChatBot';
import Perusahaan from './pages/Perusahaan';
import JobListings from './pages/JobListings';
import Terms from './pages/Terms';
import ForgotPassword from './pages/ForgotPassword';
import PasswordResetConfirmation from './pages/PasswordResetConfirmation';
import HRLogin from './pages/HRLogin';
import RegistrationConfirmation from './pages/RegistrationConfirmation';
import CompanyRegister from './pages/CompanyRegister';

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = ['/login', '/register', '/hr-register', '/forgot-password', '/password-reset-confirmation', '/HRLogin', '/registration-confirmation', '/company-register'].includes(location.pathname);

  return (
    <>
      {!hideNavbarAndFooter && <CustomNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hr-register" element={<HRRegister />} />
        <Route path="/perusahaan" element={<Perusahaan />} />
        <Route path="/joblistings" element={<JobListings />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset-confirmation" element={<PasswordResetConfirmation />} />
        <Route path="/HRLogin" element={<HRLogin />} />
        <Route path="/registration-confirmation" element={<RegistrationConfirmation />} />
        <Route path="/company-register" element={<CompanyRegister />} />
      </Routes>
      <ChatBot />
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
