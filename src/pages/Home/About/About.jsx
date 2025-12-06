import { useContext } from 'react';
import { RestaurantContext } from '../../../RestaurantContext/restaurantContext';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const { about } = useContext(RestaurantContext);

  return (
    <Container
      className="mt-4 p-4 rounded"
      style={{ backgroundColor: "#fff" }}
    >
      <Row className="align-items-center">
        {/* Columna de texto */}
        <Col md={5} className="d-flex flex-column gap-3">
          <h1 className="mb-0">{about.name}</h1>
          <h4 className="text-muted fw-medium mb-0">{about.location}</h4>
          <p style={{ lineHeight: "1.6", color: "#333" }}>{about.description}</p>
        </Col>

        {/* Columna de imágenes */}
        <Col md={7} className="d-flex justify-content-center position-relative">
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={about.image1}
              alt="chefs working"
              style={{
                width: "380px",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease",
                zIndex: 1
              }}
              className="me-n4" // margin negativo para solapamiento
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <img
              src={about.image2}
              alt="chef working"
              style={{
                width: "380px",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease",
                position: "relative",
                top: "-40px",
                marginLeft: "-40px",
                zIndex: 1
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
