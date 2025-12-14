import { useContext } from 'react';
import { RestaurantContext } from '../../../contexts/restaurantContext';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styles from './Intro.module.css';

const Intro = () => {
  const { intro } = useContext(RestaurantContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/reservation");
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm" style={{ backgroundColor: "#495e57", color: "#edefee", borderRadius: "12px" }}>
        <Row className="align-items-start">
          {/* Columna de texto */}
          <Col md={4} className="d-flex flex-column gap-2">
            <h2>{intro.title}</h2>
            <h4 className="fw-medium">{intro.location}</h4>
            <p>{intro.description}</p>
            <Button
              onClick={handleClick}
              style={{
                backgroundColor: "#f4ce14",
                border: "none",
                borderRadius: "16px",
                padding: "1rem 2rem",
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "#000"
              }}
              className={`mt-2 ${styles.btn}`}
            >
              {intro.buttonText}
            </Button>
          </Col>

          {/* Columna de imagen */}
          <Col md={8} className="d-flex justify-content-center">
            <img
              src={intro.image}
              alt="Restaurant Interior"
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Intro;
