// src/components/CategorySearches.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const categories = [
  { name: 'Finance', icon: 'path/to/finance-icon.png' },
  { name: 'Technology', icon: 'path/to/technology-icon.png' },
  { name: 'Shipping', icon: 'path/to/shipping-icon.png' },
  { name: 'Mass Media', icon: 'path/to/massmedia-icon.png' }
];

function CategorySearches() {
  return (
    <Container className="my-5">
      <h2 className="text-primary">Cari sesuai Kategori</h2>
      <Row>
        {categories.map((category, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Img variant="top" src={category.icon} className="mb-3" />
                <Card.Title>{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategorySearches;
