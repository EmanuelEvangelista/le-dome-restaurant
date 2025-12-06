import { useContext } from 'react';
import { RestaurantContext } from '../../../RestaurantContext/restaurantContext';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from "./Testimonials.module.css"
import  RatingStars  from "../../../components/RatingStars/RatingStars.jsx";

const Testimonials = () => {
  const { testimonialsList } = useContext(RestaurantContext);

  return (
    <Container className={`${styles.testimonials} mt-4`}>
      <h2 className="text-center mb-4" style={{ color: "#edefee" }}>
        💬 Testimonials
      </h2>
      <Row className="g-4">
        {testimonialsList.map((testimonial) => (
          <Col key={testimonial.key} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "1rem"
                  }}
                />
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text style={{ fontStyle: "italic", color: "#666" }}>
                  {testimonial.feedback}
                </Card.Text>
                <Card.Text>
                  {
                  <RatingStars
                  rating={testimonial.rating}
                  />
                  }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
