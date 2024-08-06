// src/pages/Perusahaan.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaIndustry } from 'react-icons/fa';
import ptsukajayaLogo from '../assets/sukajaya.png'; // Use the actual path to your image
import danoneLogo from '../assets/danone.png'; // Use the actual path to your image

const companies = [
  {
    id: 1,
    logo: ptsukajayaLogo,
    name: "PT Suka Jaya",
    website: "https://sukajaya.com",
    founded: "31 Juli, 2021",
    employees: "100+",
    locations: "4 Provinsi",
    industry: "Sosial dan Non-Profit",
  },
  {
    id: 2,
    logo: danoneLogo,
    name: "Danone Indonesia",
    website: "https://danone.co.id",
    founded: "2018",
    employees: "1000+",
    locations: "26 Provinsi",
    industry: "Profit",
  },
];

function Perusahaan() {
  return (
    <Container className="my-5">
      <Link to="/" className="d-flex align-items-center mb-3">
        <FaArrowLeft className="me-2" /> Kembali
      </Link>
      {companies.map((company) => (
        <Row key={company.id} className="mb-4 align-items-center">
          <Col md={2} className="text-center">
            <img src={company.logo} alt={company.name} className="img-fluid" style={{ maxHeight: '100px' }} />
          </Col>
          <Col md={10}>
            <Card className="p-3 shadow-sm">
              <Card.Body>
                <Card.Title>{company.name}</Card.Title>
                <Card.Text>
                  <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a>
                </Card.Text>
                <Row>
                  <Col md={3}><FaCalendarAlt className="me-2" /><strong>Didirikan pada:</strong> {company.founded}</Col>
                  <Col md={3}><FaUsers className="me-2" /><strong>Karyawan:</strong> {company.employees}</Col>
                  <Col md={3}><FaMapMarkerAlt className="me-2" /><strong>Lokasi:</strong> {company.locations}</Col>
                  <Col md={3}><FaIndustry className="me-2" /><strong>Industri:</strong> {company.industry}</Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Perusahaan;
