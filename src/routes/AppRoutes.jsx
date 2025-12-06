import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayouts";
import BookingPage from "../pages/Booking/BookingPage";
import ConfirmedBookingPage from "../pages/Booking/ConfirmedBookingPage";
import About from "../pages/About/About";
import Order from "../pages/Order/Order";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menus/Menus";

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
