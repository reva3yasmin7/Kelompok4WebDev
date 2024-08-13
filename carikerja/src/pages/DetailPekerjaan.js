// src/pages/DetailPekerjaan.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { FaClock, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/sukajaya.png'; // Replace with the correct path to the company logo

import './DetailPekerjaan.css'; // Add custom styles

function DetailPekerjaan() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [jobData, setJobData] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  

  useEffect(() => {
    setJobData({
      id: 1,
      title: "Tenaga Quality Control (QC)",
      company: "PT. Suka Jaya",
      location: "Sabang, Aceh",
      type: "Full-Time",
      description: "Tenaga Quality Control (QC) berperan penting dalam memastikan kualitas produk sesuai dengan standar yang ditetapkan.",
      responsibilities: [
        "Melakukan inspeksi visual dan pengukuran terhadap produk.",
        "Memastikan kepatuhan terhadap standar kualitas produk yang berlaku.",
        "Menganalisis data hasil inspeksi untuk mengidentifikasi masalah.",
        "Menyusun laporan hasil inspeksi.",
        "Bekerjasama dengan tim produksi untuk menyelesaikan masalah kualitas."
      ],
      skills: [
        "Memahami prinsip-prinsip Quality Control (QC).",
        "Mampu membaca dan memahami gambar teknik.",
        "Memiliki kemampuan analitis yang baik.",
        "Komunikasi yang baik, lisan maupun tulisan.",
        "Pengetahuan tentang proses produksi."
      ],
      benefits: [
        "Air minum gratis selama di lingkungan perusahaan.",
        "Jadwal fleksibel untuk kesejahteraan.",
        "Pengembangan keterampilan melalui pelatihan.",
        "Kami memberi kembali: bonus tambahan untuk lembur, THR, dan uang akhir tahun."
      ],
    });
  }, [id]);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
    toast.info(`Job ${isSaved ? 'unsaved' : 'saved'}!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleBackClick = () => {
    navigate(-1); // Use navigate(-1) to go back to the previous page
  };

  if (!jobData) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <Container className="detail-pekerjaan my-5">
      {/* Toast Container for Notifications */}
      <ToastContainer />

      {/* Header Section with Back Button and Title */}
      <Row className="align-items-center mb-4">
        <Col md={4}>
          <Button variant="outline-primary" onClick={handleBackClick}>Kembali</Button>
        </Col>
        <Col md={4} className="text-center">
          <h2 className="detail-title">Detail Pekerjaan</h2>
        </Col>
        <Col md={4} className="text-end">
          <Button variant="primary" className="btn-daftar">Daftar</Button>
        </Col>
      </Row>

      {/* Job Title Section */}
      <Row className="align-items-center mb-4">
        <Col md={8}>
          <h1 className="job-title d-flex align-items-center">
            <span>{jobData.title}</span>
            <span className="ms-auto">
              <BsBookmark
                className={`save-icon ${isSaved ? 'saved' : ''}`}
                onClick={handleSaveClick}
                style={{ cursor: 'pointer', marginLeft: '15px', fontSize: '1.5rem' }}
              />
            </span>
          </h1>
          <p className="text-muted">
            {jobData.company} <FaMapMarkerAlt className="ms-3" /> {jobData.location} <FaClock className="ms-3" /> {jobData.type}
          </p>
        </Col>
      </Row>

      {/* Rest of the Content */}
      <Row>
        <Col md={8}>
          {/* Deskripsi Section */}
          <section className="mb-4">
            <h2>Deskripsi</h2>
            <p>{jobData.description}</p>
          </section>

          {/* Tanggung Jawab Section */}
          <section className="mb-4">
            <h2>Tanggung Jawab</h2>
            <ul className="list-unstyled">
              {jobData.responsibilities.map((responsibility, index) => (
                <li key={index} className="mb-2"><FaCheck className="me-2" /> {responsibility}</li>
              ))}
            </ul>
          </section>

          {/* Keterampilan Section */}
          <section className="mb-4">
            <h2>Keterampilan yang Dibutuhkan</h2>
            <ul className="list-unstyled">
              {jobData.skills.map((skill, index) => (
                <li key={index} className="mb-2"><FaCheck className="me-2" /> {skill}</li>
              ))}
            </ul>
          </section>

          {/* Personal Traits Section */}
          <section className="mb-4">
            <h2>Bagaimana Anda</h2>
            <ul className="list-unstyled">
              <li className="mb-2"><FaCheck className="me-2" /> Orang yang teliti dan detail</li>
              <li className="mb-2"><FaCheck className="me-2" /> Semangat belajar yang tinggi</li>
              <li className="mb-2"><FaCheck className="me-2" /> Etos kerja yang baik dan bertanggung jawab</li>
            </ul>
          </section>

          {/* Tunjangan Section */}
          <section>
            <h2>Tunjangan & Benefit</h2>
            <Row>
              {jobData.benefits.map((benefit, index) => (
                <Col md={6} key={index} className="mb-3">
                  <FaCheck className="me-2" /> {benefit}
                </Col>
              ))}
            </Row>
          </section>
        </Col>

        {/* Sidebar Content */}
        <Col md={4}>
          <section className="mb-4">
            <h5 className="text-muted">Tentang posisi ini</h5>
            <div className="mb-2">
              <Badge bg="secondary">5 terisi dari 10 kapasitas</Badge>
            </div>
            <p className="text-muted">Apply Before: 31 September 2024</p>
            <p className="text-muted">Tipe Pekerjaan: {jobData.type}</p>
            <p className="text-muted">Gaji: Rp 2.5jt - Rp 3.5jt/bulan</p>
          </section>
          <section className="mb-4">
            <h5 className="text-muted">Kategori</h5>
            <p><Badge bg="warning">Industri</Badge> <Badge bg="info">Jasa</Badge></p>
          </section>
        </Col>
      </Row>

     {/* Footer Section */}
     <Row className="mt-5">
  <Col>
    <img src={logo} alt="Logo Perusahaan" className="img-fluid mb-3" style={{ width: '100px' }} />
    <h4>{jobData.company}</h4>
    <p>PT. Suka Jaya adalah pabrik industri yang berbasis di Medan yang terkenal dengan produk berkualitas tinggi dan komitmennya terhadap praktik manufaktur yang berkelanjutan.</p>
    
    {/* New Section for More Information */}
    <p>
      <strong>Selengkapnya tentang PT. Suka Jaya</strong>
    </p>
    <p>
      PT. Suka Jaya berkomitmen untuk menyediakan lingkungan kerja yang aman dan produktif. Kami percaya bahwa inovasi dan keberlanjutan adalah kunci untuk masa depan yang lebih baik.
    </p>
    
    {/* Button to Learn More */}
    <div className="text-end">
      <Button variant="primary">Pelajari Lebih Lanjut</Button>
    </div>
  </Col>
</Row>
    </Container>
  );
}

export default DetailPekerjaan;
