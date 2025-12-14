import { useContext } from 'react';
import { RestaurantContext } from '../../../contexts/restaurantContext';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './About.module.css';

const About = () => {
  const { about } = useContext(RestaurantContext);

  return (
    <Container className={`mt-4 p-4 rounded ${styles.about}`} style={{ backgroundColor: "#fff" }}>
      <Row className="align-items-center">
        {/* Columna de texto */}
        <Col md={5} className={styles.textColumn}>
          <h1 className="text-muted fw-medium mb-0">{about.name}</h1>
          <h4 className="text-muted fw-medium mb-0">{about.location}</h4>
          <p style={{ lineHeight: "1.6", color: "#333" }}>{about.description}</p>
        </Col>

        {/* Columna de imágenes */}
        <Col md={7} className={`${styles.imageColumn} d-flex justify-content-center md-6`}>
          <img src={about.image1} alt="chefs working" className={styles.image} />
          <img src={about.image2} alt="chef working" className={styles.image} />
        </Col>
      </Row>
    </Container>
  );
};

export default About;