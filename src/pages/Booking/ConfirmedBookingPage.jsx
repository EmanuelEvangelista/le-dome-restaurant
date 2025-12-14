import { useContext } from "react";
import { RestaurantContext } from "../../contexts/restaurantContext";
import { Container, Row, Col, Card } from "react-bootstrap";

const ConfirmedBookingPage = () => {
  const { bookingData, user } = useContext(RestaurantContext);

  if (!bookingData || !bookingData.date) {
    return (
      <Container className="my-5 text-center">
        <h2 style={{ color: "#495e57", fontFamily: "Roboto Condensed, sans-serif" }}>
          No booking information available
        </h2>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card
            className="shadow-lg border-0"
            style={{
              backgroundColor: "#495e57",
              color: "white",
              borderRadius: "12px",
            }}
          >
            <Card.Body className="p-5">
              <Card.Title className="text-center mb-4">
                <h2
                  style={{
                    color: "#f4ce14",
                    fontFamily: "Roboto Condensed, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Booking Confirmed!
                </h2>
              </Card.Title>

              <Card.Text
                className="text-center mb-4"
                style={{ fontStyle: "italic", color: "#e0ba10" }}
              >
                Our company policy dictates that only one reservation per person is allowed.
              </Card.Text>

              <div style={{ lineHeight: "2rem", fontSize: "1.1rem" }}>
                <Card.Text>
                  <strong style={{ color: "#f4ce14" }}>Email:</strong> {user?.email}
                </Card.Text>
                <Card.Text>
                  <strong style={{ color: "#f4ce14" }}>Date:</strong> {bookingData.date}
                </Card.Text>
                <Card.Text>
                  <strong style={{ color: "#f4ce14" }}>Time:</strong> {bookingData.time}
                </Card.Text>
                <Card.Text>
                  <strong style={{ color: "#f4ce14" }}>Guests:</strong> {bookingData.guests}
                </Card.Text>
                <Card.Text>
                  <strong style={{ color: "#f4ce14" }}>Occasion:</strong> {bookingData.occasion}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmedBookingPage;