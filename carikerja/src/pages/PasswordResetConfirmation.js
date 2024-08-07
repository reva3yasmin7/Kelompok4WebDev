// src/pages/PasswordResetConfirmation.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PasswordResetConfirmation = () => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={4} className="mx-auto">
          <div className="p-4 bg-light rounded shadow-sm text-center">
            <h4 className="mb-4">Information 🔔</h4>
            <p>Bila email yang anda kirimkan ada, maka laman menuju pengaturan ulang password akan diberikan di email tersebut.</p>
            <Button variant="primary" onClick={handleOkClick} className="mt-3">
              OK
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordResetConfirmation;
