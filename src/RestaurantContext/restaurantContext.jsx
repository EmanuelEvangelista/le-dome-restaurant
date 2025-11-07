import React, { createContext, useReducer, useState } from "react";
import restaurantImage from "../assets/img/restaurant.jpg";
import chefImage from "../assets/img/restaurant-chef B.jpg";
import greek from "../assets/img/greek-salad.jpg";
import lemon from "../assets/img/lemon-dessert.jpg";
import restaurantFood from "../assets/img/restauranfood.jpg";

const RestaurantContext = React.createContext();

const specialsMeals = [
    {title: "Greek Salad", key: 1, description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", price: "$12.99", image: greek},
    {title: "Bruschetta", key: 2, description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.", price: "$5.99", image: restaurantFood},
    {title: "Lemon Dessert", key: 3, description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.", price: "$5.00", image: lemon}
];

const testimonials = [
    {name: "Emma L.", key: 1, feedback: "An unforgettable dining experience! The flavors were exquisite, and the ambiance was perfect for our anniversary.", image: restaurantFood},
    {name: "James K.", key: 2, feedback: "The best French cuisine I've had outside of France. Every dish was a masterpiece, and the service was impeccable.", image: restaurantImage},
    {name: "Linda M.", key: 3, feedback: "A hidden gem! The attention to detail in every dish is remarkable. Can't wait to return!", image: restaurantImage},
    {name: "Michael S.", key: 4, feedback: "From start to finish, the experience was top-notch. The flavors, presentation, and service were all outstanding.", image: restaurantImage}
];

const introduction = {
    title: "Le Dôme",
    location: "San Francisco",
    description: "Contemporary haute cuisine with French roots, where technique and seasonal produce converge in an unparalleled experience.",
    image: restaurantImage,
    buttonText: "Reserve a table"
};

const aboutInfo = {
    name: "Le Dôme",
    location: "San Francisco",
    description: "Experience an unparalleled dining journey where seasonal produce and classic French flavors come together in perfect harmony. Each dish blends tradition and innovation, served in an intimate setting with impeccable service, offering a memorable taste of French gastronomy in the heart of San Francisco.",
    image1: restaurantImage,
    image2: chefImage
};


    const initialState = [
    { time: "18:00", key: 1, isBooked: false, date: "2025-11-01" },
    { time: "18:30", key: 2, isBooked: false, date: "2025-11-02" },
    { time: "19:00", key: 3, isBooked: false, date: "2025-11-03" },
    { time: "19:30", key: 4, isBooked: false, date: "2025-11-04" },
    { time: "20:00", key: 5, isBooked: false, date: "2025-11-05" },
    { time: "20:30", key: 6, isBooked: false, date: "2025-11-06" },
    { time: "21:00", key: 7, isBooked: false, date: "2025-11-07" },
];

function initializeTimes(initialState) {
    // Si la inicialización es compleja, se haría aquí.
    // Como es simple, devolvemos el valor recibido.
    return initialState; 
};

// SIMULACIÓN DE DATOS (En una app real, esto vendría de una API)
const ALL_POSSIBLE_TIMES = {
    "2025-11-01": [
        { time: "17:00", key: 10, isBooked: false, date: "2025-11-01" },
        { time: "18:00", key: 11, isBooked: false, date: "2025-11-01" },
    ],
    "2025-11-02": [
        { time: "20:00", key: 20, isBooked: false, date: "2025-11-02" },
        { time: "21:00", key: 21, isBooked: false, date: "2025-11-02" },
    ],
    "2025-11-03": [
        { time: "19:00", key: 30, isBooked: false, date: "2025-11-03" },
        { time: "20:30", key: 31, isBooked: false, date: "2025-11-03" },
    ],
    "2025-11-04": [
        { time: "18:30", key: 40, isBooked: false, date: "2025-11-04" },
        { time: "19:30", key: 41, isBooked: false, date: "2025-11-04" },
    ],
    "2025-11-05": [
        { time: "17:30", key: 50, isBooked: false, date: "2025-11-05" },
        { time: "21:00", key: 51, isBooked: false, date: "2025-11-05" },
    ],
    "2025-11-06": [
        { time: "18:00", key: 60, isBooked: false, date: "2025-11-06" },
        { time: "20:00", key: 61, isBooked: false, date: "2025-11-06" },
    ],
    "2025-11-07": [
        { time: "19:00", key: 70, isBooked: false, date: "2025-11-07" },
        { time: "21:30", key: 71, isBooked: false, date: "2025-11-07" },
    ]
    
};

function restaurantReducer(state, action) {
    switch (action.type) {
        
        // Acción para marcar un slot específico como reservado
        case 'MARK_TIME_AS_BOOKED': {
            const { date, time } = action.payload;
            
            // Mapeamos el array para encontrar y actualizar el elemento,
            // garantizando la inmutabilidad.
            return state.map(slot => {
                // Si encontramos la hora y fecha a reservar:
                if (slot.date === date && slot.time === time) {
                    // Devolvemos un nuevo objeto (slot) con isBooked: true
                    return { ...slot, isBooked: true };
                }
                // Si no, devolvemos el slot original sin cambios
                return slot;
            });
        }

       case 'UPDATE_TIMES': { 
            const selectedDate = action.payload; // Esto es la fecha
            
            // 🎯 Lógica para devolver los horarios específicos de esa fecha
            // En este ejemplo, devolvemos los horarios del día 2025-11-02 si se selecciona
            const newTimes = ALL_POSSIBLE_TIMES[selectedDate] || []; // Devuelve un array vacío si no hay datos
            
            // El Reducer devuelve el nuevo array de horarios
            return newTimes; 
        }
        
        // Acción para reemplazar el array de horarios (ej. al cambiar de fecha)
        case 'REPLACE_ALL_TIMES': {
            return action.payload; // Simplemente devolvemos el nuevo array
        }
        
        default:
            return state; // Si la acción es desconocida, devolvemos el estado sin cambios
    }
};

function RestaurantProvider({ children }) {
    const [specials, setSpecials] = useState(specialsMeals);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);
    const [intro, setIntro] = useState(introduction);
    const [about, setAbout] = useState(aboutInfo);
    const [bookingData, setBookingData] = useState(null);
    const [availableTimes, dispatch] = useReducer(
    restaurantReducer, 
    initialState, // <-- El estado inicial (array)
    initializeTimes        // <-- ¡La función de inicialización! (Tercer argumento)
);
    const [data, setData] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("Birthday");

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

            }}>
            {children}
        </RestaurantContext.Provider>
    );
}

export { RestaurantContext, RestaurantProvider };