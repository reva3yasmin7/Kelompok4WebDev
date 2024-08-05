// src/components/RecentSearches.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import danoneIcon from '../assets/danone-icon.png'; // Use the actual path to your Danone icon
import jtIcon from '../assets/jt-icon.png'; // Use the actual path to your JT icon
import gojekIcon from '../assets/gojek-icon.png'; // Use the actual path to your Gojek icon
import bfiIcon from '../assets/bfi-icon.png'; // Use the actual path to your BFI icon
import arrowRight from '../assets/arrow-right.svg'; // Use the actual path to your arrow icon

const recentSearches = [
  {
    company: 'Danone',
    icon: danoneIcon,
    employees: '10,000+',
    location: 'Jakarta - DKI Jakarta',
    description: 'Kami mencari penjahit baju seragam untuk Pesta...',
    category: 'Multinational',
    jobs: 200
  },
  {
    company: 'JT International',
    icon: jtIcon,
    employees: '8,000+',
    location: 'Medan - Sumatera Utara',
    description: 'Kami mencari pianis untuk cafe kami yang berada...',
    category: 'Multinational',
    jobs: 56
  },
  {
    company: 'Gojek',
    icon: gojekIcon,
    employees: '9,000+',
    location: 'Jakarta - DKI Jakarta',
    description: 'Kami mencari Penerjemah untuk dokumen kami dari...',
    category: 'Multinational',
    jobs: 45
  },
  {
    company: 'BFI Finance Indonesia',
    icon: bfiIcon,
    employees: '7,000+',
    location: 'Tangerang - Banten',
    description: 'Kami mencari penyanyi untuk mengisi acara kami...',
    category: 'National',
    jobs: 90
  },
];

function RecentSearches() {
  return (
    <div className="recent-searches py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="section-title">
             
              Pencarian <span className="text-primary">Terkini</span>
            </h2>
          </Col>
        </Row>
        <Row>
          {recentSearches.map((search, index) => (
            <Col md={3} key={index}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <img src={search.icon} alt={search.company} className="company-icon me-2" />
                    {search.company}
                  </Card.Title>
                  <Card.Text>
                    <strong>{search.employees} Employee</strong>
                    <br />
                    <strong>{search.location}</strong>
                    <br />
                    <span className="text-muted">{search.description}</span>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-warning text-dark">{search.category}</span>
                  <div className="d-flex align-items-center">
                    <span className="badge bg-success text-white">{search.jobs} Jobs</span>
                    <Button variant="link" className="p-0 ms-2">
                      <img src={arrowRight} alt="Arrow" className="arrow-icon" />
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default RecentSearches;
