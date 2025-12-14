import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import imagenRestaurant from "../../assets/img/restaurantOutside.png";
import imagenRestaurant2 from "../../assets/img/restaurantInside2.png";
import { RestaurantContext } from '../../contexts/restaurantContext.jsx';
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

const BookingPage = () => {
  const { intro } = useContext(RestaurantContext);

  return (
    <>
      <Container className="my-4">
        <Row className="mb-4">
          <Col md={8}>
            <h2 aria-label="Introduction Title" className="text-start"><strong>{intro.title}</strong></h2>
            <h4 aria-label="Location" className="text-start"><strong>{intro.location}</strong></h4>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6} className="d-flex justify-content-center">
            <img src={imagenRestaurant} className="img-fluid rounded" width="80%" alt="Exterior del restaurante Le Dôme" />
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src={imagenRestaurant2} className="img-fluid rounded" width="80%" alt="Interior del restaurante Le Dôme" />
          </Col>
        </Row>

        <BookingForm />
      </Container>
    </>
  );
};

export default BookingPage;
