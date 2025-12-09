import { useContext } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
    const { setUser, setIsAuthenticated, setIsSubmitted, setBookingData } = useContext(RestaurantContext);

  const handleLogout = () => {
     setUser(null);
    setIsAuthenticated(false);
    setIsSubmitted(false);
    setBookingData(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("bookingData");        // limpia user + localStorage desde el contexto
    navigate("/");   // redirige al home
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