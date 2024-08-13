// src/pages/DaftarDeskripsiPerusahaan.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/sukajaya.png'; // Ganti dengan path logo perusahaan
import companyImage1 from '../assets/image1.png'; // Ganti dengan path gambar
import companyImage2 from '../assets/image2.png'; // Ganti dengan path gambar
import companyImage3 from '../assets/image3.png'; // Ganti dengan path gambar
import companyImage4 from '../assets/image4.png'; // Ganti dengan path gambar

const companyData = {
  1: {
    name: "PT Suka Jaya",
    founded: "31 Juli, 2021",
    employees: "100+",
    locations: "4 Provinsi",
    industry: "Sosial dan Non-Profit",
    profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    contact: {
      twitter: "https://twitter.com/Sukajaya",
      facebook: "https://facebook.com/sukajaya",
      linkedin: "https://linkedin.com/company/sukajaya",
      email: "sukajaya@gmail.com",
    },
    offices: [
      "Aceh, NAD - Kantor Pusat",
      "Jakarta Pusat",
      "Semarang, Jawa Tengah",
      "Mataram, Nusa Tenggara Barat"
    ],
    images: [companyImage1, companyImage2, companyImage3, companyImage4],
  },
};

function DaftarDeskripsiPerusahaan() {
  const { id } = useParams();
  const company = companyData[id];

  return (
    <Container className="my-5">
      <Row className="mb-4 align-items-center">
        <Col md={2}>
          <img src={logo} alt="Logo Perusahaan" className="img-fluid" style={{ width: '100px' }} />
        </Col>
        <Col md={10}>
          <h1 className="text-center">{company.name}</h1>
        </Col>
      </Row>
      <Row className="text-center mb-4">
        <Col>
          <p>
            <strong>Didirikan pada:</strong> {company.founded} <br />
            <strong>Karyawan:</strong> {company.employees} <br />
            <strong>Lokasi:</strong> {company.locations} <br />
            <strong>Industri:</strong> {company.industry}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Profil Perusahaan</h2>
          <p className="text-center">{company.profile}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Kontak</h2>
          <div className="text-center">
            <a href={company.contact.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="me-2" />
            </a>
            <a href={company.contact.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="me-2" />
            </a>
            <a href={company.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="me-2" />
            </a>
            <a href={`mailto:${company.contact.email}`}>
              <FaEnvelope className="me-2" />
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Lokasi Kantor</h2>
          <ul className="text-center">
            {company.offices.map((office, index) => (
              <li key={index}>{office}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        {company.images.map((image, index) => (
          <Col md={3} key={index} className="mb-3">
                        <img src={image} alt={`Gambar ${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row>
      <Row className="text-center">
        <Col>
          <Button variant="primary" className="mt-3" onClick={() => window.history.back()}>
            Kembali
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DaftarDeskripsiPerusahaan;