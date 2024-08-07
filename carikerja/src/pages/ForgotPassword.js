// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset request submitted for:', email);
    // Add logic to handle password reset request
    navigate('/password-reset-confirmation'); // Navigate to confirmation page
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={4} className="mx-auto">
          <div className="text-start mb-4">
            <Button variant="link" onClick={() => navigate(-1)}>
              <FaArrowLeft className="me-2" />
            </Button>
          </div>
          <div className="p-4 bg-light rounded shadow-sm">
            <h2 className="text-center mb-4">Forgot Password</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-3">
                Send Request
              </Button>
            </Form>
            <div className="text-center mt-3">
              <small>
                This site is protected by Privacy Policy and Terms of Service apply
              </small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
