import { useReducer, useState, useEffect, createContext } from "react";
import restaurantImage from "../assets/img/restaurantOutside.png";
import chefImage from "../assets/img/restaurant-chef B.jpg";
import chefImage2 from "../assets/img/chef2.jpg";
import profileW1 from "../assets/img/perfil1.png";
import profileW2 from "../assets/img/perfil3w.png";
import profileM1 from "../assets/img/perfil2M.png";
import profileM2 from "../assets/img/perfil4M.png";
import greek from "../assets/img/greek-salad.jpg";
import lemon from "../assets/img/lemon-dessert.jpg";
import restaurantFood from "../assets/img/restauranfood.jpg";
import { fetchAPI } from "../utils/api.js";

const RestaurantContext = createContext();
// --- Datos estáticos ---
const specialsMeals = [
  { title: "Greek Salad", key: 1, description: "The famous greek salad...", price: "$12.99", image: greek },
  { title: "Bruschetta", key: 2, description: "Our Bruschetta is made...", price: "$5.99", image: restaurantFood },
  { title: "Lemon Dessert", key: 3, description: "This comes straight...", price: "$5.00", image: lemon },
];

const testimonials = [
  { name: "Emma L.", key: 1, feedback: "An unforgettable dining...", image: profileW1 },
  { name: "James K.", key: 2, feedback: "The best French cuisine...", image: profileM1 },
  { name: "Linda M.", key: 3, feedback: "A hidden gem!...", image: profileW2 },
  { name: "Michael S.", key: 4, feedback: "From start to finish...", image: profileM2 },
];

const introduction = {
  title: "Le Dôme",
  location: "San Francisco",
  description: "Discover authentic French cuisine in the heart of the Bay. At Le Dôme, every dish is a celebration of tradition, artistry, and fresh ingredients. A culinary escape where elegance and a passion for France come together.",
  image: restaurantImage,
  buttonText: "Reserve a table",
};

const aboutInfo = {
  name: "Le Dôme",
  location: "San Francisco",
  description: "At Le Dôme, we are proud to be the ambassador of authentic French cuisine in the Bay. Our mission is simple: to transport our guests to the finest bistros in France, offering dishes prepared with precision, passion, and respect for time-honored culinary techniques. From the first amuse-bouche to the last petit four, every ingredient is selected for its superior quality, and every presentation is a work of art. We are the meeting point where the timeless elegance of French gastronomy meets impeccable service, creating not just a dinner, but a memorable cultural experience.",
  image1: chefImage2,
  image2: chefImage,
};

// Función pura que inicializa el estado del reducer
function initializeTimes(date) {
  return fetchAPI(date);
}

// Reducer para manejar los cambios de horarios
function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.payload));
    case "SET_TIMES":
      return action.payload;
    default:
      return state;
  }
}

// --- Provider principal ---
function RestaurantProvider({ children }) {
  const [specials, setSpecials] = useState(specialsMeals);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const [intro, setIntro] = useState(introduction);
  const [about, setAbout] = useState(aboutInfo);

  const storedBooking = JSON.parse(localStorage.getItem("bookingData"));

  const [bookingData, setBookingData] = useState(
    storedBooking || {
      date: "",
      time: "",
      guests: "",
      occasion: ""
    }
  );

  // Guardar en localStorage cuando bookingData cambia
  useEffect(() => {
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
  }, [bookingData]);

  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    new Date(),
    initializeTimes
  );

  const [data, setData] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleUpdateTimes = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  return (
    <RestaurantContext.Provider
      value={{
        specials,
        testimonialsList,
        intro,
        about,
        bookingData,
        availableTimes,
        data,
        times,
        guests,
        occasion,
        isSubmitted,
        setIsSubmitted,
        dispatch,
        setBookingData,
        setSpecials,
        setTestimonialsList,
        setIntro,
        setAbout,
        setData,
        setTimes,
        setGuests,
        setOccasion,
        handleUpdateTimes,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export { RestaurantContext, RestaurantProvider, initializeTimes, timesReducer };