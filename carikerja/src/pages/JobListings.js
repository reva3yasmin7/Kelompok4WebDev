// src/pages/JobListings.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function JobListings() {
  const jobs = [
    {
      title: "Tenaga Quality Control (QC)",
      company: "PT. Suka Jaya",
      location: "Sabang, Aceh",
      type: "Full-Time",
      tags: ["Full-Time", "Jasa", "Pakaian"],
    },
    {
      title: "Servis Elektronik",
      company: "Rian Putra",
      location: "Lhoksuwmawe, Aceh",
      type: "Part-Time",
      tags: ["Part-Time", "Jasa", "Elektronik"],
    },
    // Add more job listings here as needed
  ];

  return (
    <Container className="my-5">
      <Row>
        {jobs.map((job, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {job.company} • {job.location} • {job.type}
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
        ))}
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="outline-primary" className="me-2">&lt;</Button>
          <Button variant="outline-primary" className="me-2">1</Button>
          <Button variant="outline-primary" className="me-2">2</Button>
          <Button variant="outline-primary" className="me-2">3</Button>
          <Button variant="outline-primary" className="me-2">&gt;</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default JobListings;
