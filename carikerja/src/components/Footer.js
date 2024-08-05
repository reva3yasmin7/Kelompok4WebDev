// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logoImage from '../assets/carikerja1.png';

function Footer() {
  return (
    <footer className="footer bg-primary text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <div className="d-flex align-items-center mb-3">
              <img src={logoImage} alt="carikerja" className="logo" />
              <h5 className="ms-2 mb-0">carikerja</h5>
            </div>
            <p>Platform hebat untuk pencari kerja atau bakat yang memiliki minat terhadap startup. Temukan pekerjaan impian Anda dengan lebih mudah.</p>
          </Col>
          <Col md={2}>
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><a href="#developer" className="text-white">Developer</a></li>
              <li><a href="#terms" className="text-white">Terms</a></li>
              <li><a href="#privacy" className="text-white">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="#contact" className="text-white">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Dapatkan informasi pekerjaan</h5>
            <p>Berita pekerjaan terbaru, artikel, dikirim ke kotak masuk Anda setiap minggu.</p>
            <Form>
              <Form.Group controlId="formBasicEmail" className="d-flex">
                <Form.Control type="email" placeholder="Alamat Email" className="me-2" />
                <Button variant="secondary" type="submit" className='btn-primaryfooter'>Kirim</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-google"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="text-center">&copy; 2024 @carikerja. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
