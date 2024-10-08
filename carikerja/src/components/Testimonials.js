import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import motion for animations
import starIcon from '../assets/star 1.png'; 
import leftArrow from '../assets/left-arrow.svg';

import fediImage from '../assets/fedi.png';
import ahmadImage from '../assets/ahmad.png';
import bellaImage from '../assets/bella.png';

const testimonials = [
  {
    name: 'Fedi Nuril',
    role: 'Client',
    feedback: 'Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.',
    image: fediImage,
    rating: 5,
  },
  {
    name: 'Ahmad Muhsin',
    role: 'Client',
    feedback: 'Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.',
    image: ahmadImage,
    rating: 5,
  },
  {
    name: 'Bella Cantika',
    role: 'Client',
    feedback: 'Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.',
    image: bellaImage,
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },  // Initially hidden
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate to visible
};

function Testimonials() {
  return (
    <div className="testimonials py-5 position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="section-title">
              <span className="text-primary">Testimoni</span>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center position-relative">
          <Button variant="link" className="arrow-button left-arrow">
            <img src={leftArrow} alt="Left Arrow" />
          </Button>
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index}>
              {/* Wrap each Card in a motion.div for animation */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <Card className="mb-4">
                  <Card.Body>
                    <div className="stars mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <img src={starIcon} alt="Star" key={i} className="star-icon" />
                      ))}
                    </div>
                    <Card.Text className="feedback mb-4">
                      "{testimonial.feedback}"
                    </Card.Text>
                    <div className="d-flex align-items-center">
                      <img src={testimonial.image} alt={testimonial.name} className="client-image me-3" />
                      <div>
                        <Card.Title className="mb-0">{testimonial.name}</Card.Title>
                        <Card.Subtitle className="text-muted">{testimonial.role}</Card.Subtitle>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
