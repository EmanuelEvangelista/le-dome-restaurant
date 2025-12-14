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
  { strMeal: "Greek Salad", idMeal: 1, description: "Fresh tomatoes, cucumbers, red onion, Kalamata olives, and feta, dressed with olive oil and oregano, a crisp Mediterranean classic..", price: "12.99", strMealThumb: greek },
  { strMeal: "Bruschetta", idMeal: 2, description: "Toasted artisan bread rubbed with garlic, topped with ripe tomatoes, basil, and olive oil. A timeless Italian bite celebrating simplicity.", price: "5.99", strMealThumb: restaurantFood },
  { strMeal: "Lemon Dessert", idMeal: 3, description: "Light lemon cream with airy sponge, balancing sweet and tart flavors. A refreshing, elegant finish that cleanses the palate.", price: "5.00", strMealThumb: lemon },
];

const testimonials = [
  { name: "Emma L.", key: 1, feedback: "An unforgettable dining...", image: profileW1, rating:"4" },
  { name: "James K.", key: 2, feedback: "The best French cuisine...", image: profileM1, rating:"5" },
  { name: "Linda M.", key: 3, feedback: "A hidden gem!...", image: profileW2, rating:"4" },
  { name: "Michael S.", key: 4, feedback: "From start to finish...", image: profileM2, rating:"5" },
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
  const [team, setTeam] = useState([]);

  const [menus, setMenus] = useState({
    entradas: [],
    principales: [],
    postres: []
  });

  const storedCart = JSON.parse(localStorage.getItem("cartData")) || [];
  const [order, setOrder] = useState([]);
  const [cart, setCart] = useState(storedCart);
  const [orderCount, setOrderCount] = useState(cart.length);
  const [currentForm, setCurrentForm] = useState(null);

  const [data, setData] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("userData");
    return storedUser
      ? JSON.parse(storedUser)
      : { firstName: "", lastName: "", email: "" };
  });

  const storedAuth =
    JSON.parse(localStorage.getItem("isAuthenticated")) || false;
  const [isAuthenticated, setIsAuthenticated] = useState(storedAuth);

  const [bookingData, setBookingData] = useState(() => {
    const saved = localStorage.getItem("bookingData");
    // si existe en localStorage, parsealo; si no, usar objeto con defaults
    return saved
      ? JSON.parse(saved)
      : { date: "", time: "", guests: 2, occasion: "Birthday" };
  });

  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    new Date(),
    initializeTimes
  );

  useEffect(() => {
    async function getTeam() {
      try {
        const response = await fetch ("https://randomuser.me/api/?results=8");
        const data = await response.json();
        setTeam(data.results);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    }
    getTeam();
  } , []);


  useEffect(() => {
  const fetchDetails = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals[0];
  };

  const getMenus = async () => {
    try {
      const [starterRes, beefRes, dessertRes] = await Promise.all([
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter"),
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"),
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"),
      ]);

      const starter = (await starterRes.json()).meals.slice(0, 5);
      const beef = (await beefRes.json()).meals.slice(0, 6);
      const dessert = (await dessertRes.json()).meals.slice(0, 4);

      // Obtener detalles completos
      const entradas = await Promise.all(starter.map(m => fetchDetails(m.idMeal)));
      const principales = await Promise.all(beef.map(m => fetchDetails(m.idMeal)));
      const postres = await Promise.all(dessert.map(m => fetchDetails(m.idMeal)));

      setMenus({ entradas, principales, postres });
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  getMenus();
}, []);

 useEffect(() => {
  async function getOrder() {
    try {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
      const data = await res.json();

      const mealsWithPrice = data.meals.slice(0, 12).map(meal => ({
        ...meal,
        price: (Math.random() * 20 + 5).toFixed(2) // precio entre 5 y 25 USD
      }));

      // 👉 Combinar los especiales con los pedidos
      const combinedOrders = [
        ...specialsMeals,   // tus platos especiales estáticos
        ...mealsWithPrice   // los platos de mariscos con precio aleatorio
      ];

      setOrder(combinedOrders);
      console.log("Orders fetched:", combinedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }
  getOrder();
}, []);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const handleUpdateTimes = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

    // 👉 Lógica del carrito
  const addToCart = (meal) => {
    setCart((prevCart) => {
      const exists = prevCart.find(item => item.idMeal === meal.idMeal);
      if (exists) {
        return prevCart.map(item =>
          item.idMeal === meal.idMeal ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...meal, qty: 1 }];
    });
    setOpenModal(true);
    setOrderCount(cart.length + 1);
  };

  const removeFromCart = (idMeal) => {
    setCart(prevCart => prevCart.filter(item => item.idMeal !== idMeal));
    setOrderCount(cart.length - 1);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
  };

  useEffect(() => {
  localStorage.setItem("userData", JSON.stringify(user));
}, [user]);

  useEffect(() => {
  localStorage.setItem("bookingData", JSON.stringify(bookingData));
}, [bookingData]);

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
        team,
        order,
        cart,
        openModal,
        orderCount,
        menus,
        isAuthenticated,
        user,
        currentForm,
        setCurrentForm,
        setUser,
        setIsAuthenticated,
        addToCart,
        removeFromCart,
        getTotal,
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
        setOpenModal
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export { RestaurantContext, RestaurantProvider, initializeTimes, timesReducer };