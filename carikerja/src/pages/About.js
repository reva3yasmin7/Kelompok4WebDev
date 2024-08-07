// src/pages/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import vectorImage from '../assets/Vector.png'; // Path to your vector image

function About() {
  return (
    <Container className="d-flex flex-column min-vh-100 my-5">
      <Row className="justify-content-center">
        <Col md={8} className="about-container p-4 rounded">
          <h1 className="text-center">Tentang Kami</h1>
          <img src={vectorImage} alt="Vector illustration" className="vector-image my-3" />
          <h3 className="mt-4">Selamat Datang di carikerja</h3>
          <p>
            carikerja adalah platform pencarian kerja yang didedikasikan untuk membantu Anda menemukan peluang karir terbaik. Kami memahami bahwa mencari pekerjaan yang sesuai dengan keahlian dan minat Anda bisa menjadi tantangan, dan kami di sini untuk membuat proses tersebut menjadi lebih mudah dan efektif.
          </p>
          <h3 className="mt-4">Misi Kami</h3>
          <p>
            Misi kami adalah untuk menghubungkan pencari kerja dengan perusahaan yang membutuhkan bakat mereka. Kami berkomitmen untuk menyediakan informasi pekerjaan yang akurat dan terkini, serta memberikan alat yang Anda butuhkan untuk sukses dalam pencarian kerja Anda.
          </p>
        </Col>
      </Row>
      
    </Container>
  );
}

export default About;