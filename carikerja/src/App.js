// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import HRRegister from './pages/HRRegister';
import ChatBot from './components/ChatBot';
import Perusahaan from './pages/Perusahaan'; // Import the Perusahaan component

function App() {
  const location = useLocation();
  const showNavbar = !['/login', '/register', '/hr-register'].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hr-register" element={<HRRegister />} />
        <Route path="/perusahaan" element={<Perusahaan />} /> {/* Add the Perusahaan route */}
      </Routes>
      <ChatBot />
    </>
  );
}

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
