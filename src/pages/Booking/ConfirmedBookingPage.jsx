import React from "react";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext";
import { Container, Row, Col, Card } from "react-bootstrap";

const ConfirmedBookingPage = () => {
  const { bookingData } = React.useContext(RestaurantContext);

  if (!bookingData || !bookingData.date) {
    return (
      <Container className="my-5 text-center">
        <h2>No booking information available</h2>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4">
                <h2>Booking Confirmed!</h2>
              </Card.Title>
              <Card.Text>
                <strong>Date:</strong> {bookingData.date}
              </Card.Text>
              <Card.Text>
                <strong>Time:</strong> {bookingData.time}
              </Card.Text>
              <Card.Text>
                <strong>Guests:</strong> {bookingData.guests}
              </Card.Text>
              <Card.Text>
                <strong>Occasion:</strong> {bookingData.occasion}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmedBookingPage;
