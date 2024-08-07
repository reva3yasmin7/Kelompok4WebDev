// src/pages/JobListings.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing necessary icons
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation

function JobListings() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate(); // Using useNavigate hook for navigation

  const jobs = [
    {
      title: "Tenaga Quality Control (QC)",
      company: "PT. Suka Jaya",
      location: "Sabang, Aceh",
      type: "Full-Time",
      tags: ["Jasa", "Pakaian"],
    },
    {
      title: "Servis Elektronik",
      company: "Rian Putra",
      location: "Lhoksuwmawe, Aceh",
      type: "Part-Time",
      tags: ["Jasa", "Elektronik"],
    },
    {
      title: "Tukang Bangunan",
      company: "Nomad Jaya",
      location: "Sabang, Aceh",
      type: "Part-Time",
      tags: ["Jasa", "Tukang"],
    },
    {
      title: "Jasa Pembersih",
      company: "UD Bersihin dong",
      location: "Langsa, Aceh",
      type: "Full-Time",
      tags: ["Jasa", "Kebersihan"],
    },
    {
      title: "Jasa Sopir",
      company: "PT. Valley Medan Sejahtera",
      location: "Pidie, Aceh",
      type: "Contract",
      tags: ["Jasa", "Kendaraan"],
    },
    {
      title: "Jasa Pengangkut Barang",
      company: "PT. Mengangkut",
      location: "Tamiang, Aceh",
      type: "Full-Time",
      tags: ["Jasa", "Tukang"],
    },
    {
      title: "Koki",
      company: "Mie Gacuan",
      location: "Aceh Singkil, Aceh",
      type: "Contract",
      tags: ["Jasa", "Makanan"],
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container className="d-flex flex-column min-vh-100 my-5">
      <Row>
        <Col>
          <Button 
            variant="link" 
            className="mb-4" 
            onClick={() => navigate('/')} // Redirect to home page
            style={{ textDecoration: 'none' }} // Remove underline
          >
            <FaArrowLeft /> Kembali
          </Button>
        </Col>
      </Row>

      <Row className="flex-grow-1">
        {currentPage === 1 ? (
          jobs.map((job, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {job.company} • {job.location} 
                    <span className="mx-2">|</span> 
                    <span className={`badge ${job.type === "Full-Time" ? "bg-success" : "bg-warning"} text-dark`}>
                      {job.type}
                    </span>
                  </Card.Subtitle>
                  <div className="mb-2">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="badge bg-info text-dark me-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="primary">Lihat Selengkapnya</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <h4>Halaman Kosong</h4>
            <p>Konten tidak tersedia untuk halaman ini.</p>
          </Col>
        )}
      </Row>

      <Row className="mt-auto">
        <Col className="text-center">
          <Button 
            variant="outline-primary" 
            className="me-2" 
            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)} // Navigate to the previous page
            >
              <FaChevronLeft /> {/* Left arrow icon */}
            </Button>
            <Button 
              variant={currentPage === 1 ? "primary" : "outline-primary"} 
              className="me-2" 
              onClick={() => handlePageChange(1)}
            >
              1
            </Button>
            <Button 
              variant={currentPage === 2 ? "primary" : "outline-primary"} 
              className="me-2" 
              onClick={() => handlePageChange(2)}
            >
              2
            </Button>
            <Button 
              variant={currentPage === 3 ? "primary" : "outline-primary"} 
              className="me-2" 
              onClick={() => handlePageChange(3)}
            >
              3
            </Button>
            <Button 
              variant="outline-primary" 
              className="me-2" 
              onClick={() => handlePageChange(currentPage < 3 ? currentPage + 1 : 3)} // Navigate to the next page
            >
              <FaChevronRight /> {/* Right arrow icon */}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default JobListings;