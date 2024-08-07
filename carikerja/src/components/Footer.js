// src/components/Footer.js
import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import image from '../assets/carikerjafooter.png';
import './Footer.css'; // Ensure the path is correct

function Footer() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSuccessMessage(`Informasi akan dikirim ke ${email}`);
      setShowSuccessMessage(true);
      setEmail('');
      setTimeout(() => setShowSuccessMessage(false), 3000); // Hide after 3 seconds
    }, 500);
  };

  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        {showSuccessMessage && (
          <Alert
            variant="success"
            onClose={() => setShowSuccessMessage(false)}
            dismissible
            className="mt-3 fade-in floating-alert"
          >
            {successMessage}
          </Alert>
        )}
        <Row>
          <Col md={4}>
            <h5 className="d-flex align-items-center">
              <img src={image} alt="carikerja logo" className="img-fluid me-2" style={{ height: '40px' }} />
              carikerja
            </h5>
            <p>
              Platform hebat untuk pencari kerja atau bakat yang memiliki minat terhadap startup. Temukan pekerjaan impian Anda dengan lebih mudah.
            </p>
          </Col>
          <Col md={2}>
            <h6>About</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-white">Developer</a></li>
              <li><a href="/terms" className="text-white">Terms & Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Contact</h6>
            <ul className="list-unstyled">
              <li><a href="/contact" className="text-white">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6>Dapatkan informasi pekerjaan</h6>
            <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Alamat Email" 
                className="form-control mb-2" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className="btn btn-light">Kirim</button>
            </form>
            <div className="mt-3">
              <a href="#!" className="text-white me-2" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#!" className="text-white me-2" aria-label="Twitter"><FaTwitter /></a>
              <a href="#!" className="text-white me-2" aria-label="Instagram"><FaInstagram /></a>
              <a href="#!" className="text-white" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <small>&copy; 2024 carikerja. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
