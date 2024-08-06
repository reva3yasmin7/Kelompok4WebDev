// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import image from '../assets/carikerjafooter.png';

function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            
            <h5>
            <img src={image} alt="carikerja" className="img-fluid" />
             carikerja
            </h5>
            <p>Platform hebat untuk pencari kerja atau bakat yang memiliki minat terhadap startup. Temukan pekerjaan impian Anda dengan lebih mudah.</p>
          </Col>
          <Col md={2}>
            <h6>About</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-white">Developer</a></li>
              <li><a href="#!" className="text-white">Terms</a></li>
              <li><a href="#!" className="text-white">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Contact</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-white">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6>Dapatkan informasi pekerjaan</h6>
            <form>
              <input type="email" placeholder="Alamat Email" className="form-control mb-2" />
              <button type="submit" className="btn btn-light">Kirim</button>
            </form>
            <div className="mt-3">
              <a href="#!" className="text-white me-2"><FaFacebookF /></a>
              <a href="#!" className="text-white me-2"><FaTwitter /></a>
              <a href="#!" className="text-white me-2"><FaInstagram /></a>
              <a href="#!" className="text-white"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <small>&copy; 2024 @ carikerja. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
