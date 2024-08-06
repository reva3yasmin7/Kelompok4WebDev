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

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = ['/login', '/register', '/hr-register'].includes(location.pathname);

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
