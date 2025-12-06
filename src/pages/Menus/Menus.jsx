import { useContext } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext";
import { Container, Row, Col } from "react-bootstrap";
import { color } from "framer-motion";

const Menu = () => {
  const { menus } = useContext(RestaurantContext);

  const renderSection = (title, items) => (
    <Row className="mb-5 justify-content-center">
      <Col md={8}>
        {/* Section Title */}
        <h2 className="text-uppercase fw-bold border-bottom pb-2 mb-4 text-center" style={{ color: "#495e57", fontFamily: "Roboto Condensed, sans-serif" }}>
          {title}
        </h2>

        {/* List of dishes */}
        {items.map((meal) => (
          <div key={meal.idMeal} className="mb-5 text-center">
            <h5 className="fw-bold">{meal.strMeal}</h5>

            <p className="fst-italic mt-3" style={{ fontSize: "0.9rem" }}>How do we prepare it?</p>
            <p className="text-justify" style={{ fontSize: "1rem" }}>
              {meal.strInstructions}
            </p>
          </div>
        ))}
      </Col>
    </Row>
  );

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-5 fw-bold" style={{ color: "#f4ce14", fontFamily: "Gorditas, sans-serif" }}>
            Restaurant Menu
          </h1>
        </Col>
      </Row>

      {renderSection("Appetizers", menus.entradas)}
      {renderSection("Main Courses", menus.principales)}
      {renderSection("Desserts", menus.postres)}
    </Container>
  );
};

export default Menu;