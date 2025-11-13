import React, { useContext } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext.jsx";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { BiFontFamily } from "react-icons/bi";
import { submitAPI } from "../../utils/api.js";

const BookingForm = () => {
  // 1. Obtener estados, setters, dispatcher y funciones del contexto
  const {
    data,
    times,
    guests,
    occasion,
    setData,
    setTimes,
    setGuests,
    setOccasion,
    dispatch,
    availableTimes,
    handleUpdateTimes,
  } = useContext(RestaurantContext);

  // 2. Manejador de cambios en los campos
  const handleInputChange = (e, setter) => {
    const newValue = e.target.value;

    // 👇 Si se cambia la fecha (usamos name en lugar de id), actualizamos los horarios disponibles desde el contexto
    if (e.target.name === "res-date") {
      const selectedDate = newValue;
      handleUpdateTimes(selectedDate); // 🔹 función del contexto
      setter(selectedDate); // actualiza la fecha en el estado local
      setTimes(""); // reinicia la hora seleccionada
      return; // 👈 salimos aquí
    }

    // para los demás campos (hora, invitados, ocasión)
    setter(newValue);
  };

  // 3. Manejador para el envío del formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date: data,
      time: times,
      guests: guests,
      occasion: occasion,
};

const isSubmitted = submitAPI(formData);

if (isSubmitted) {
   alert(
        `¡Reserva confirmada!\nFecha: ${data}, Hora: ${times}, Invitados: ${guests}, Ocasión: ${occasion}`
      );
} else {
      alert("Lo sentimos, no se pudo realizar la reserva.");
    }
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
          <Col md={6}>
            <h2 style={{ fontFamily: "Gorditas", fontSize: "2rem" }}>
              Choose Your Table
            </h2>
            <Form
              onSubmit={handleFormSubmit}
              style={{ display: "grid", maxWidth: "800px", gap: "20px" }}
            >
              {/* Campo Fecha */}
              <Form.Group className="mb-3" controlId="res-date">
                <Form.Label>Choose the date</Form.Label>
                <Form.Control
                  type="date"
                  name="res-date"
                  value={data}
                  onChange={(e) => handleInputChange(e, setData)}
                  required
                />
              </Form.Group>

              {/* Campo Hora */}
              <Form.Group className="mb-3" controlId="res-time">
                <Form.Label>Choose the time</Form.Label>
                <Form.Select
                  name="res-time"
                  value={times}
                  onChange={(e) => handleInputChange(e, setTimes)}
                  required
                >
                  <option value="">Select...</option>
                  {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
                    availableTimes.map((slot, idx) => {
                      // slot can be a string like "17:00" or an object {time, date}
                      if (slot && typeof slot === 'object') {
                        const key = slot.date ? `${slot.date}-${slot.time}-${idx}` : `slot-${idx}`;
                        return (
                          <option key={key} value={slot.time}>
                            {slot.time}
                          </option>
                        );
                      }
                      const key = `slot-${slot}-${idx}`;
                      return (
                        <option key={key} value={slot}>
                          {slot}
                        </option>
                      );
                    })
                  ) : null}
                </Form.Select>
              </Form.Group>

              {/* Campo Invitados */}
              <Form.Group className="mb-3" controlId="guests">
                <Form.Label>Number of guests</Form.Label>
                <Form.Control
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
                  id="occasion"
                  name="occasion"
                  value={occasion}
                  onChange={(e) => handleInputChange(e, setOccasion)}
                >
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>

              <Button type="submit" variant="primary" className="mt-3 w-100">
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
