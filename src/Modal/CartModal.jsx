import { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext/restaurantContext.jsx";
import { useNavigate } from "react-router-dom";
import { ListGroup, Button, Modal } from "react-bootstrap";

const CartModal = () => {
  const { cart, removeFromCart, getTotal, openModal, setOpenModal } = useContext(RestaurantContext);
  const navigate = useNavigate();

  return (
    <Modal show={openModal} onHide={() => setOpenModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>🛒 Carrito</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <ListGroup variant="flush">
            {cart.map(item => (
              <ListGroup.Item key={item.idMeal} className="d-flex justify-content-between align-items-center">
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
        )}
        <h5 className="mt-3">Total: ${getTotal()}</h5>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setOpenModal(false)}>
          🛍️ Seguir comprando
        </Button>
        <Button
          style={{ backgroundColor: "#f4ce14", borderColor: "#f4ce14", color: "#000" }}
          onClick={() => {
            setOpenModal(false);
            navigate("/checkout");
          }}
          disabled={cart==0}
        >
          ✅ Finalizar pedido
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
