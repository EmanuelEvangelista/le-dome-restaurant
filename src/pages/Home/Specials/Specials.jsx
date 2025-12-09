import { useContext } from 'react';
import { RestaurantContext } from '../../../RestaurantContext/restaurantContext';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from "./Specials.module.css"

const Specials = () => {
  const { specials } = useContext(RestaurantContext);

  return (
    <Container className={`${styles.specials} mt-4`}>
      <h2 className="text-center mb-4">✨ Specials</h2>
      <Row className="g-4 justify-content-evenly">
        {specials.map((meal) => (
          <Col key={meal.idMeal} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="h-100 shadow-sm"
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <Card.Img
                variant="top"
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0"
                }}
              />
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Card.Title>{meal.strMeal}</Card.Title>
                  <span className="fw-bold">${meal.price}</span>
                </div>
                <Card.Text className="text-muted" style={{ fontSize: "1rem" }}>{meal.description}</Card.Text>
                <NavLink to="/order-online" className="mt-auto">
                  <Button
                    variant="link"
                    style={{
                      color: "#f4ce14",
                      fontWeight: "500",
                      textDecoration: "none"
                    }}
                  >
                    🚚 Order a delivery
                  </Button>
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Specials;
