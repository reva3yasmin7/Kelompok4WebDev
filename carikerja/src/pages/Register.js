// src/pages/Register.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/carikerja1.png'; // Logo path
import sideImage from '../assets/side_image.png'; // Replace with your actual side image path
import peopleGotHired from '../assets/peoplegothired.png'; // Path to your "People Got Hired" image

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert('Please accept the terms and conditions.');
      return;
    }
    console.log('Form submitted:', { fullName, email, password });
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <Link to="/" className="d-flex align-items-center mb-4">
            <img src={logo} alt="Logo" style={{ width: '100px', marginRight: '10px' }} />
            <h2 className="mb-0">carikerja</h2>
          </Link>
          
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

          <Form.Group controlId="formAcceptTerms" className="mt-3">
            <Form.Check 
              type="checkbox" 
              label="Dengan mengklik 'Masuk', Anda menyatakan bahwa Anda telah membaca dan menerima Ketentuan Layanan dan Kebijakan Privasi."
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
          </Form.Group>
        </Col>
        
        <Col md={6} className="text-center">
          <img
            src={sideImage}
            alt="Side Illustration"
            className="img-fluid"
            style={{ maxHeight: '400px' }} // Adjust as needed
          />
          <div style={{ position: 'relative', marginTop: '-50px' }}> {/* Adjust position as needed */}
            <img
              src={peopleGotHired}
              alt="People Got Hired"
              className="img-fluid"
              style={{ width: '150px', position: 'absolute', bottom: '0', right: '0' }} // Adjust size and position
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;