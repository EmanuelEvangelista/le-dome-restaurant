import { useContext } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext.jsx";
import { Container, Card, ListGroup, Button } from "react-bootstrap";

const Checkout = () => {
  const { cart, removeFromCart, getTotal } = useContext(RestaurantContext);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🛒 Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-center">Tu carrito está vacío</p>
      ) : (
        <Card className="shadow-sm">
          <Card.Body>
            <ListGroup variant="flush">
              {cart.map(item => (
                <ListGroup.Item
                  key={item.idMeal}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div>
                    {item.strMeal} (x{item.qty})
                  </div>
                  <div>
                    ${item.price * item.qty}
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="ms-2"
                      onClick={() => removeFromCart(item.idMeal)}
                    >
                      ❌
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <h4 className="mt-3">Total: ${getTotal()}</h4>

            <div className="d-flex justify-content-end mt-3">
              <Button
                style={{
                  backgroundColor: "#f4ce14",
                  borderColor: "#f4ce14",
                  color: "#000",
                  fontWeight: "600"
                }}
              >
                ✅ Confirmar pedido
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Checkout;

