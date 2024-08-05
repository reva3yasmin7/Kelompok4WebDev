// src/components/CategorySearches.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import financeIcon from '../assets/finance-icon.png'; // Use the actual path to your finance icon
import technologyIcon from '../assets/technology-icon.png'; // Use the actual path to your technology icon
import shippingIcon from '../assets/shipping-icon.png'; // Use the actual path to your shipping icon
import massMediaIcon from '../assets/massmedia-icon.png'; // Use the actual path to your mass media icon
import arrowRight from '../assets/arrow-right.svg'; // Use the actual path to your arrow icon

const categories = [
  { name: 'Finance', icon: financeIcon },
  { name: 'Technology', icon: technologyIcon },
  { name: 'Shipping', icon: shippingIcon },
  { name: 'Mass Media', icon: massMediaIcon },
];

function CategorySearches() {
  return (
    <div className="category-searches py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="section-title">
              Cari sesuai <span className="text-primary">Kategori</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={12} className="mb-4">
                <Card className="text-center">
                  <Card.Body>
                    <img src={categories[0].icon} alt={categories[0].name} className="category-icon mb-3" />
                    <Card.Title>{categories[0].name}</Card.Title>
                    <Button variant="link" className="p-0">
                      <img src={arrowRight} alt="Arrow" className="arrow-icon" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12}>
                <Card className="text-center">
                  <Card.Body>
                    <img src={categories[2].icon} alt={categories[2].name} className="category-icon mb-3" />
                    <Card.Title>{categories[2].name}</Card.Title>
                    <Button variant="link" className="p-0">
                      <img src={arrowRight} alt="Arrow" className="arrow-icon" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={12} className="mb-4">
                <Card className="text-center">
                  <Card.Body>
                    <img src={categories[1].icon} alt={categories[1].name} className="category-icon mb-3" />
                    <Card.Title>{categories[1].name}</Card.Title>
                    <Button variant="link" className="p-0">
                      <img src={arrowRight} alt="Arrow" className="arrow-icon" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12}>
                <Card className="text-center">
                  <Card.Body>
                    <img src={categories[3].icon} alt={categories[3].name} className="category-icon mb-3" />
                    <Card.Title>{categories[3].name}</Card.Title>
                    <Button variant="link" className="p-0">
                      <img src={arrowRight} alt="Arrow" className="arrow-icon" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CategorySearches;
