// src/components/Testimonials.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const mockData = [
  { name: 'Fedi Nuril', feedback: 'Ut ullamcorper hendrerit tempor.', image: 'path/to/image-fedi.png' },
  { name: 'Ahmad Muhsin', feedback: 'Aliquam in rutrum dui.', image: 'path/to/image-ahmad.png' },
  { name: 'Bella Cantika', feedback: 'Maecenas ac placerat metus.', image: 'path/to/image-bella.png' }
];

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTestimonials(mockData);
    }, 1000);
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-primary">Testimoni APA??</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Text>{testimonial.feedback}</Card.Text>
                <Card.Footer className="d-flex flex-column align-items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle mb-2"
                    width="50"
                  />
                  <Card.Title>{testimonial.name}</Card.Title>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Testimonials;
