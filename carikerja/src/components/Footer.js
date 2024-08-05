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
              <img src={logoImage} alt="carikerja" className="logo" />
              carikerja
              <div className='mt-3'>
              <p>Platform hebat untuk pencari kerja atau 
                bakat yang <br></br>
               memiliki minat terhadap startup. Temukan pekerjaan <br></br>impian Anda dengan lebih mudah.</p>
              </div>
          </Col>
          <Col md={3}>
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><a href="#developer" className="text-white">Developer</a></li>
              <li><a href="#terms" className="text-white">Terms</a></li>
              <li><a href="#privacy" className="text-white">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="secondary" type="submit" className="mt-2">Kirim</Button>
            </Form>
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
