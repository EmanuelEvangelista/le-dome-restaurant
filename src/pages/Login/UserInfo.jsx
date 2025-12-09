import { useContext } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext";
import { Button, Card } from "react-bootstrap";
import Logout from "../../components/Logout/Logout";
import { useNavigate } from "react-router-dom";

const UserInfoShow = () => {
  const { user, bookingData } = useContext(RestaurantContext);
    const navigate = useNavigate();
  if (!user) return null;

  return (
    <div
      style={{
        marginTop: "2rem",
        lineHeight: "2rem",
        fontSize: "1.1rem",
        backgroundColor: "#3a4a45", // mismo tono que usás en UserInfo
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "inset 0 0 8px rgba(0,0,0,0.4)",
      }}
    >
        <h3
        style={{
          color: "#f4ce14",
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: "bold",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        User Information
      </h3>
      {user.firstName && (
        <Card.Text
          style={{
            marginBottom: "0.75rem",
            color: "white",
            fontFamily: "Roboto Condensed, sans-serif",
          }}
        >
          <strong style={{ color: "#f4ce14" }}>First Name:</strong> {user.firstName}
        </Card.Text>
      )}
      {user.lastName && (
        <Card.Text
          style={{
            marginBottom: "0.75rem",
            color: "white",
            fontFamily: "Roboto Condensed, sans-serif",
          }}
        >
          <strong style={{ color: "#f4ce14" }}>Last Name:</strong> {user.lastName}
        </Card.Text>
      )}
      {user.email && (
        <Card.Text
          style={{
            marginBottom: "0.75rem",
            color: "white",
            fontFamily: "Roboto Condensed, sans-serif",
          }}
        >
          <strong style={{ color: "#f4ce14" }}>Email:</strong> {user.email}
        </Card.Text>
      )}
      <div>
  {bookingData &&
    bookingData.date &&
    bookingData.time &&
    bookingData.guests &&
    bookingData.occasion && (
      <Button
        variant="outline-warning"
        style={{
          marginTop: "1rem",
          backgroundColor: "#f4ce14",
          border: "none",
          color: "#3a4a45",
          fontWeight: "bold",
        }}
        onClick={() => navigate("/confirmed-booking")}
      >
        View my Booking
      </Button>
    )}
</div>
      <div style={{ display: "flex", justifyContent: "right" }}>
      <Button variant="outline-warning" style={{ marginTop: "1rem", backgroundColor: "black", border: "none", color: "#f4ce14", fontWeight: "bold" }}
      >
        <Logout />
      </Button>
      </div>
    </div>
  );
};

export default UserInfoShow;