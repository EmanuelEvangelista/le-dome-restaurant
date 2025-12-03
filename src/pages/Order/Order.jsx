import { useContext } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext.jsx";
import CartModal  from "../../Modal/CartModal.jsx";

const Order = () => {
  const { order, addToCart, openModal } = useContext(RestaurantContext);

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      {/* Menú */}
      <div>
        <h2>Menú</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {Array.isArray(order) ? (
            order.map(item => (
              <div key={item.idMeal} style={{ border: "1px solid #ccc", padding: "10px" }}>
                <img src={item.strMealThumb} alt={item.strMeal} width="150" />
                <h4>{item.strMeal}</h4>
                <p>Price: ${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))
          ) : (
            <p>Loading menu...</p>
          )}
        </div>
        {openModal && <CartModal />}
      </div>
    </div>
  );
};

export default Order;
