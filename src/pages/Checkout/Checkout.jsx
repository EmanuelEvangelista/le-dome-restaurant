import { useContext, useEffect } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext.jsx";

const Checkout = () => {
  const { cart, removeFromCart, getTotal } = useContext(RestaurantContext);


  return (
    <div>
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
      <button>Confirm</button>
    </div>
  );
};

export default Checkout;
