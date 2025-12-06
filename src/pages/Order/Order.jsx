import { useContext } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext.jsx";
import CartModal from "../../Modal/CartModal.jsx";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./Order.module.css";

const Order = () => {
  const { order, addToCart, openModal } = useContext(RestaurantContext);

  return (
    <Container className="mt-4">
      <h2 className={`${styles.title} text-center mb-4`}>🍽️ Menú</h2>
      <Row>
        {Array.isArray(order) ? (
          order.map(item => (
            <Col key={item.idMeal} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <Card.Body className={`${styles.text} d-flex flex-column`}>
                  <Card.Title>{item.strMeal}</Card.Title>
                  <Card.Text className={`${styles.text} text-muted`}>Price: ${item.price}</Card.Text>
                  <Button
                    className={`${styles.btnCustom} mt-auto`}
                    variant="primary"
                    onClick={() => addToCart(item)}
                  >
                    🛒 Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">Loading menu...</p>
        )}
      </Row>

      {/* Modal del carrito */}
      {openModal && <CartModal />}
    </Container>
  );
};

export default Order;
