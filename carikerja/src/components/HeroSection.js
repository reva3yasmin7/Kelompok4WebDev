import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import heroImage from '../assets/main-image.png'; 
import searchIcon from '../assets/search.png'; 
import vectorImage from '../assets/Vector.png';
import './HeroSection.css'; // Import the CSS file

function HeroSection() {
    return (
      <div className="hero-section py-5 position-relative">
        <div className="animated-background"></div>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-md-left text-center">
              <h1 className="hero-title">Temukan<br/>Lowongan<br/>Pekerjaan</h1>
              <div className="underline-vector">
                <img src={vectorImage} alt="Vector" />
              </div>
              <p className="hero-subtitle">lowongan yang tepat dengan cara yang benar</p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={heroImage}
                alt="Hero"
                className="img-fluid"
                style={{ maxHeight: '400px' }}
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col md={8} className="text-center">
              <Form className="search-bar d-flex justify-content-center align-items-center">
                <div style={{ position: 'relative', width: '100%' }}>
                  <img src={searchIcon} alt="Search" className="search-icon" style={{ position: 'absolute', left: '100px', top: '50%', transform: 'translateY(-50%)', zIndex: 5 }} />
                  <Form.Control
                    type="text"
                    placeholder="Cari berdasarkan nama perusahaan"
                    className="my-3 rounded-pill"
                    style={{ paddingLeft: '50px' }}
                  />
                </div>
                <Button variant="primary" className="rounded-pill my-3 ms-1">Cari</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default HeroSection;
