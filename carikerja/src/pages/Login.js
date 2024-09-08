// src/pages/Login.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/carikerja1.png'; // Logo path
import sideImage from '../assets/side_image1.png'; // Replace with your actual side image path
import peopleGotHired from '../assets/peoplegothired.png'; // Path to your "People Got Hired" image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Ambil data pengguna dari local storage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
  
    if (storedUserData) {
      // Cek apakah email dan password cocok
      if (storedUserData.email === email && storedUserData.password === password) {
        alert('Login berhasil! Selamat datang, ' + storedUserData.fullName);
        // Redirect ke halaman utama atau halaman dashboard
      } else {
        alert('Email atau kata sandi salah. Silakan coba lagi.');
      }
    } else {
      alert('Tidak ada akun terdaftar. Silakan daftar terlebih dahulu.');
    }
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={6} className="text-center position-relative">
          <img
            src={sideImage}
            alt="Side Illustration"
            className="img-fluid"
            style={{ maxHeight: '400px' }} // Adjust as needed
          />
          <img
            src={peopleGotHired}
            alt="People Got Hired"
            className="img-fluid"
            style={{
              position: 'absolute',
              top: '20px', // Adjust vertical position
              left: '20px', // Adjust horizontal position
              width: '100px' // Adjust size as needed
            }}
          />
        </Col>

        <Col md={6}>
          <Link to="/" className="d-flex align-items-center mb-4">
            <img src={logo} alt="Logo" style={{ width: '100px', marginRight: '10px' }} />
            <h2 className="mb-0">carikerja</h2>
          </Link>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Masukkan Alamat Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Masuk
            </Button>
          </Form>

          <div className="mt-3">
            <p>
              Belum punya akun? <Link to="/register">Daftar</Link>
            </p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;