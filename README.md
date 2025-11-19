Le Dôme Restaurant Booking App
📖 Overview
Le Dôme is a restaurant booking application built with React. It provides users with an elegant interface to explore the restaurant’s specials, testimonials, and background information, while also allowing them to make and confirm reservations.

The project uses React Context to manage global state, including booking data, available times, and restaurant information. Booking data is persisted in localStorage so users don’t lose their reservation details when refreshing the page.

🚀 Features
Restaurant Introduction: Displays the restaurant’s name, location, description, and hero image.

Special Meals Section: Showcases featured dishes with images, descriptions, and prices.

Testimonials: Highlights customer feedback with profile images.

About Section: Provides background information about the restaurant and chefs.

Booking Form: Users can select date, time, number of guests, and occasion.

Booking Confirmation Page: Displays confirmed reservation details.

Persistent Data: Reservation details are saved in localStorage.

Dynamic Times: Available booking times are managed via a reducer and fetched from an API utility.

🛠️ Tech Stack
React (functional components, hooks, context API)

React Bootstrap (layout and styling)

JavaScript (ES6+)

LocalStorage (data persistence)

📂 Project Structure
Código
src/
│── assets/img/             # Images (restaurant, chefs, profiles, food)
│── components/             # Reusable components (BookingForm, etc.)
│── RestaurantContext/      # Context provider and state management
│── utils/api.js            # API utility for fetching available times
│── pages/                  # Page components (BookingPage, ConfirmedBookingPage)
│── App.js                  # Main app entry point
⚙️ Context API
The RestaurantContext provides:

specials: Array of special meals.

testimonialsList: Array of customer testimonials.

intro: Restaurant introduction data.

about: Restaurant background info.

bookingData: Reservation details (date, time, guests, occasion).

availableTimes: Managed via reducer and API.

Utility functions: setBookingData, handleUpdateTimes, etc.