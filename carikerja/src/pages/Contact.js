// src/pages/ContactUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const ContactUs = () => {
 

  return (
    <Container className="d-flex flex-column min-vh-100 py-5">
 
      <Row className="justify-content-center">
        <Col md={8} className="bg-light p-4 rounded text-center">
          <h1>Ada Pertanyaan?</h1>
          <p className="mt-4">Hubungi kami di email berikut:</p>
          <h2>carikerja@gmail.com</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;