import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayouts";
import BookingPage from "../pages/Booking/BookingPage";

// Componentes temporales para las rutas que faltan
const About = () => <h1>About Page</h1>;
const Menu = () => <h1>Menu Page</h1>;
const OrderOnline = () => <h1>Order Online Page</h1>;
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
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
