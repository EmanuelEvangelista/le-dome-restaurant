import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext.jsx";
import CartModal from "../../Modal/CartModal.jsx";

const CartIcon = () => {
    const { openModal, setOpenModal, orderCount } = useContext(RestaurantContext);

    const handleClick = () => {
        setOpenModal(true);
        console.log(openModal);
        {openModal ?
            <CartModal /> : null;
        }
    };

  return (
    <button onClick={handleClick}>
      <FaShoppingCart size={30} />
      <h3>{orderCount}</h3>
    </button>
  );
}

export default CartIcon;

