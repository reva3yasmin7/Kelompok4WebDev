import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function RequireLogin() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Mengarahkan ke halaman login
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h2 className="mb-4 text-center">Anda Harus Masuk Terlebih Dahulu!</h2>
      <Button variant="primary" size="lg" onClick={handleLoginClick}>
        Masuk
      </Button>
    </Container>
  );
}

export default RequireLogin;
