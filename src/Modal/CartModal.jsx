import { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext/restaurantContext.jsx";
import { useNavigate } from "react-router-dom";


const CartModal = () => {
  const { cart, removeFromCart, getTotal, openModal, setOpenModal } = useContext(RestaurantContext);
  const navigate = useNavigate();

  if (!openModal) return null; // 👉 si está en false, no se muestra nada

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>🛒 Carrito</h2>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.idMeal}>
                {item.strMeal} (x{item.qty}) - ${item.price * item.qty}
                <button onClick={() => removeFromCart(item.idMeal)}>❌</button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${getTotal()}</h3>
        <div>
        <button onClick={() => setOpenModal(false)}>Continue shopping</button>
        <button
          onClick={() => {
            setOpenModal(false);
            navigate("/checkout");
          }}
        >
          Finalize order
        </button>
        </div>
        </div>
    </div>
  );
};

// 👉 estilos básicos inline
const overlayStyle = {
  position: "fixed",
  top: 0, left: 0,
  width: "100%", height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "400px",
  maxHeight: "80vh",
  overflowY: "auto"
};

export default CartModal;
