// src/components/RecentSearches.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const mockData = [
  { company: 'Danone', employees: '10,000+', jobs: 200, location: 'Jakarta - DKI Jakarta', category: 'Multinational' },
  { company: 'JT International', employees: '8,000+', jobs: 56, location: 'Medan - Sumatera Utara', category: 'Multinational' },
  { company: 'Gojek', employees: '9,000+', jobs: 45, location: 'Jakarta - DKI Jakarta', category: 'Multinational' },
  { company: 'BFI Finance Indonesia', employees: '7,000+', jobs: 90, location: 'Tangerang - Banten', category: 'National' }
];

function RecentSearches() {
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearches(mockData);
    }, 1000);
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-primary">Pencarian Terkini</h2>
      <Row>
        {searches.map((search, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{search.company}</Card.Title>
                <Card.Text>{search.employees} Employee</Card.Text>
                <Card.Text>{search.location}</Card.Text>
                <Card.Text>{search.category}</Card.Text>
                <Card.Text>{search.jobs} Jobs</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RecentSearches;
