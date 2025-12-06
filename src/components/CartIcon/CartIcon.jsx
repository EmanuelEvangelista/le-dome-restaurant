import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext.jsx";
import CartModal from "../../Modal/CartModal.jsx";
import { Button, Badge } from "react-bootstrap";

const CartIcon = () => {
  const { openModal, setOpenModal, orderCount } = useContext(RestaurantContext);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Button
        variant="light"
        onClick={handleClick}
        className="position-relative shadow-sm"
        style={{ borderRadius: "50%", padding: "10px", backgroundColor: "#f4ce14" }}
      >
        <FaShoppingCart size={24} color="#000" />
        {orderCount > 0 && (
          <Badge
            bg="danger"
            pill
            className="position-absolute top-0 start-100 translate-middle"
          >
            {orderCount}
          </Badge>
        )}
      </Button>

      {openModal && <CartModal />}
    </>
  );
};

export default CartIcon;

