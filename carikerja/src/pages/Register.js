// src/pages/Register.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/carikerja1.png'; // Logo path
import sideImage from '../assets/side_image.png'; // Replace with your actual side image path

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, email, password });
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <Link to="/" className="d-flex align-items-center mb-4">
            <img src={logo} alt="Logo" style={{ width: '100px', marginRight: '10px' }} /> {/* Adjust logo size */}
            <h2 className="mb-0">carikerja</h2>
          </Link>
          <h1>Daftar</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama Lengkap"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Alamat Email</Form.Label>
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
              Daftar
            </Button>
          </Form>
          <div className="mt-3">
            <p>
              Sudah memiliki Akun? <Link to="/login">Masuk</Link>
            </p>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <img
            src={sideImage}
            alt="Side Illustration"
            className="img-fluid"
            style={{ maxHeight: '400px' }} // Adjust as needed
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;