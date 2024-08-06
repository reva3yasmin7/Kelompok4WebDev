// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import HRRegister from './pages/HRRegister';
import ChatBot from './components/ChatBot';
import Perusahaan from './pages/Perusahaan';

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = ['/login', '/register', '/hr-register'].includes(location.pathname);

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hr-register" element={<HRRegister />} />
        <Route path="/perusahaan" element={<Perusahaan />} />
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
