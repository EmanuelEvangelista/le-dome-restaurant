import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayouts";
import BookingPage from "../pages/Booking/BookingPage";
import ConfirmedBookingPage from "../pages/Booking/ConfirmedBookingPage";
import About from "../pages/About/About";
import Order from "../pages/Order/Order";
import Checkout from "../pages/Checkout/Checkout";

// Componentes temporales para las rutas que faltan
const Menu = () => <h1>Menu Page</h1>;
const Login = () => <h1>Login Page</h1>;

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/reservation" element={<BookingPage />} />
          <Route path="/confirmed-booking" element={<ConfirmedBookingPage />} />
          <Route path="/order-online" element={<Order />} />
           <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
