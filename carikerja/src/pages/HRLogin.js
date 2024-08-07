// src/pages/HRLogin.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const HRLogin = () => {
  const [companyEmail, setCompanyEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { companyEmail, password });
        
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={6} className="mx-auto">
            <Button variant="link" onClick={() => navigate(-1)}>
            <FaArrowLeft className="me-2" /> 
            </Button>
          <div className="text-center">
            <h2 className="mb-4">Masuk sebagai HR</h2>
          </div>
          <div className="p-4 bg-light rounded shadow-sm">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formCompanyEmail">
                <Form.Label>Alamat Email Perusahaan</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan Domain Perusahaan"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
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
                Masuk
              </Button>
              <Button variant="secondary" className="w-100 mt-2" onClick={() => navigate('/')}>
                Daftarkan Perusahaan
              </Button>
            </Form>
            <div className="text-center mt-3">
              <small>
                Belum punya akun? <a href="/hr-register">Daftar</a>
              </small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HRLogin;