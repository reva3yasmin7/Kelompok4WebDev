// src/pages/CompanyRegister.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../assets/carikerja1.png'; 

const CompanyRegister = () => {
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [companyNumber, setCompanyNumber] = useState('');
  const [businessLicense, setBusinessLicense] = useState(null);
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [taxId, setTaxId] = useState('');
  const [registrationCertificate, setRegistrationCertificate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Company registration submitted:', {
      companyName,
      country,
      address,
      postalCode,
      companyNumber,
      registrationNumber,
      taxId,
      businessLicense,
      registrationCertificate,
    });
    // Tambahkan logika untuk menangani pendaftaran perusahaan
  };

  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
    
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={8} className="mx-auto">
          <Button variant="link" onClick={() => window.history.back()}>
            <FaArrowLeft className="me-2" />
          </Button>
          <div className="text-center mb-4">
            <img src={logo} alt="Carikerja Logo" className="mb-3" style={{ width: '150px' }} />
            <h2>Daftarkan Perusahaan Anda di bawah ini</h2>
            <h5>Detail Perusahaan</h5>
          </div>
          <div className="p-4 bg-light rounded shadow-sm">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formCompanyName">
                <Form.Label>Nama Perusahaan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama Perusahaan"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCountry">
                <Form.Label>Negara Asal</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Negara Asal"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Alamat Perusahaan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Alamat Perusahaan"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPostalCode">
                <Form.Label>Kode Pos</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Kode Pos"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCompanyNumber">
                <Form.Label>Nomor Perusahaan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Nomor Perusahaan"
                  value={companyNumber}
                  onChange={(e) => setCompanyNumber(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBusinessLicense">
                <Form.Label>Surat Izin Usaha Perdagangan</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => handleFileChange(e, setBusinessLicense)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formRegistrationNumber">
                <Form.Label>Nomor Registrasi Perusahaan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Nomor Registrasi Perusahaan"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formTaxId">
                <Form.Label>Nomor Pokok Wajib Pajak</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Nomor Pokok Wajib Pajak"
                  value={taxId}
                  onChange={(e) => setTaxId(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formRegistrationCertificate">
                <Form.Label>Tanda Daftar Perusahaan</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => handleFileChange(e, setRegistrationCertificate)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-3">
                Daftar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyRegister;