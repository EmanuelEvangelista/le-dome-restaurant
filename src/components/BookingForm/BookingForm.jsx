import { useContext, useState } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext.jsx";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import TimeOption from "./TimeOption.jsx";
import { submitAPI } from "../../utils/api.js";
import { useNavigate } from "react-router-dom";

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
    setBookingData,
    setIsSubmitted
  } = useContext(RestaurantContext);

  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  // 2. Manejador de cambios en los campos
  const handleInputChange = (e, setter) => {
    const newValue = e.target.value;

    // 👇 Si se cambia la fecha (usamos name en lugar de id), actualizamos los horarios disponibles desde el contexto
    if (e.target.name === "res-date") {
      const selectedDate = newValue;
      handleUpdateTimes(selectedDate); // función del contexto
      setter(selectedDate); // actualiza la fecha en el estado local
      setTimes("");
      return;
    }

    // para los demás campos (hora, invitados, ocasión)
    setter(newValue);
  };

  const handleFormSubmit = (e) => {
  e.preventDefault();
  e.stopPropagation();

  const form = e.currentTarget;

  if (form.checkValidity() === false) {
    
  } else {

  const formData = {
    date: data,
    time: times,
    guests: guests,
    occasion: occasion
  };

  setBookingData(formData);

  const result = submitAPI(formData);
  setIsSubmitted(!!result);

  setValidated(true);

  setData("");
  setTimes("");
  setGuests(2);
  setOccasion("Birthday");

  if (result) {
  setIsSubmitted(true);
  setTimeout(() => navigate("/confirmed-booking"), 2000);
}
};
  };

  return (
    <>
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
            <h2 style={{ fontFamily: "Roboto Condensed, sans-serif", fontSize: "2rem" }}>
              Choose Your Table
            </h2>
            <Form
              aria-label="Booking form"
              data-testid="booking-form"
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
              type="submit"  
              disabled={!data || !times || !guests || !occasion}
              >
                Make my Reservation
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookingForm;
