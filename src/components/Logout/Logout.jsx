import { useContext } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated, setIsSubmitted, setBookingData } = useContext(RestaurantContext);

  const handleLogout = () => {
    // 👉 limpiar estados del contexto
    setUser({ firstName: "", lastName: "", email: "" });
    setIsAuthenticated(false);
    setIsSubmitted(false);
    setBookingData({ date: "", time: "", guests: 2, occasion: "Birthday" });

    // 👉 limpiar localStorage
    localStorage.removeItem("userData");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("bookingData");
    localStorage.removeItem("cartData");

    // 👉 redirigir al home
    navigate("/");
  };

  return (
    <Button
      variant="outline-warning"
      style={{
        backgroundColor: "black",
        border: "none",
        color: "#f4ce14",
        fontWeight: "bold",
      }}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default Logout;
