import { useContext, useState, useEffect } from "react";
import { RestaurantContext } from "../../contexts/restaurantContext.jsx";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import TimeOption from "./TimeOption.jsx";
import { submitAPI } from "../../utils/api.js";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const BookingForm = () => {
  const {
    data,
    times,
    guests,
    occasion,
    setData,
    setTimes,
    setGuests,
    setOccasion,
    handleUpdateTimes,
    isAuthenticated,
    bookingData,         // <-- AGREGADO
    setBookingData,
    setIsSubmitted,
  } = useContext(RestaurantContext);

  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  // 👉 Comprobar si bookingData está completo
  const hasBooking =
    bookingData &&
    bookingData.date &&
    bookingData.time &&
    bookingData.guests &&
    bookingData.occasion;

  // 👉 Manejador de cambios en los campos
  const handleInputChange = (e, setter) => {
    const newValue = e.target.value;

    if (e.target.name === "res-date") {
      const selectedDate = newValue;
      handleUpdateTimes(selectedDate);
      setter(selectedDate);
      setTimes("");
      return;
    }

    setter(newValue);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      // manejar error si el form no es válido
    } else {
      const formData = { date: data, time: times, guests, occasion };
      setBookingData(formData);
      localStorage.setItem("bookingData", JSON.stringify(formData));

      const result = submitAPI(formData);
      setIsSubmitted(!!result);
      setValidated(true);

      if (result && isAuthenticated) {
        setIsSubmitted(true);
      } else if (!isAuthenticated) {
        setIsSubmitted(true);
        setShowAlert(true);
        setTimeout(() => navigate("/login"), 1000);
      }
    }
  };

  const alertMessage = !isAuthenticated && (
    <Alert variant="success" className="mt-3">
      You need to be logged in to make a reservation.
    </Alert>
  );

  useEffect(() => {
    if (hasBooking && isAuthenticated) {
      navigate("/confirmed-booking");
    }
  }, [hasBooking, isAuthenticated]);

  return (
    <Container
      className="booking-form"
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <h2
            style={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontSize: "2rem",
            }}
          >
            Choose Your Table
          </h2>
          {showAlert && alertMessage}
          <Form
            aria-label="Booking form"
            data-testid="booking-form"
            noValidate
            validated={validated}
            onSubmit={handleFormSubmit}
            style={{ display: "grid", maxWidth: "800px", gap: "20px" }}
          >
            {/* Campo Fecha */}
            <Form.Group className="mb-3" controlId="res-date">
              <Form.Label>Choose the date</Form.Label>
              <Form.Control
                aria-label="Choose the date"
                type="date"
                name="res-date"
                value={data}
                onChange={(e) => handleInputChange(e, setData)}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </Form.Group>

            {/* Campo Hora */}
            <Form.Group className="mb-3" controlId="res-time">
              <Form.Label>Choose the time</Form.Label>
              <Form.Select
                aria-label="Choose the time"
                name="res-time"
                value={times}
                onChange={(e) => handleInputChange(e, setTimes)}
                required
              >
                <option value="">Select...</option>
                <TimeOption />
              </Form.Select>
            </Form.Group>

            {/* Campo Invitados */}
            <Form.Group className="mb-3" controlId="guests">
              <Form.Label>Number of guests</Form.Label>
              <Form.Control
                aria-label="Number of guests"
                type="number"
                placeholder="2"
                min="1"
                max="6"
                name="guests"
                value={guests}
                onChange={(e) => handleInputChange(e, setGuests)}
                required
              />
            </Form.Group>

            {/* Campo Ocasión */}
            <Form.Group className="mb-3" controlId="occasion">
              <Form.Label>Occasion</Form.Label>
              <Form.Select
                aria-label="Special request"
                id="occasion"
                name="occasion"
                value={occasion}
                required
                onChange={(e) => handleInputChange(e, setOccasion)}
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>

            <Button
              aria-label="Make my Reservation"
              style={{
                backgroundColor: "#f4ce14",
                border: "none",
              }}
              type="submit"
              disabled={!data || !times || !guests || !occasion}
            >
              Make my Reservation
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingForm;