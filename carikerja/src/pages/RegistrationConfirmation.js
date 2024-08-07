import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegistrationConfirmation = () => {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h2>Registrasi Berhasil!</h2>
      <p>Selamat, registrasi Anda sebagai HR telah berhasil.</p>
      <Button variant="primary" onClick={() => navigate('/HRLogin')}>
        Masuk
      </Button>
    </Container>
  );
};

export default RegistrationConfirmation;