// src/pages/HRRegister.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const HRRegister = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', { fullName, email, password });
    // Tambahkan logika untuk menangani pendaftaran
    navigate('/registration-confirmation'); // Arahkan ke halaman konfirmasi
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <div className="text-start mb-4">
            <Button variant="link" onClick={() => navigate(-1)}>
              <FaArrowLeft className="me-2" />
            </Button>
          </div>
          <div className="p-4 bg-light rounded shadow-sm">
            <h2 className="text-center mb-4">Daftar Sebagai HR</h2>
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
              <Button variant="primary" type="submit" className="w-100 mt-3">
                Daftar
              </Button>
            </Form>
            <div className="text-center mt-3">
              <small>
                Sudah memiliki Akun? <a href="/HRLogin">Masuk</a>
              </small>
            </div>
            <div className="text-center mt-3">
              <small>
                Dengan mengklik 'Daftar', Anda menyatakan bahwa Anda telah membaca dan menerima
                <a href="/terms"> Ketentuan Layanan</a> dan <a href="/terms"> Kebijakan Privasi</a>.
              </small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HRRegister;