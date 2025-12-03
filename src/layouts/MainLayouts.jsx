import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CartIcon from "../components/CartIcon/CartIcon.jsx"
import CartModal from "../Modal/CartModal.jsx";
import './MainLayout.css';

export default function MainLayout({ children }) {
  return (
    <div className="mainLayoutContainer">
      <div className="topbar">
        <Header />
        <Navbar />
        <CartIcon />
      </div>
      <CartModal />
      <main className="mainContent">{children}</main>
      <Footer />
    </div>
  );
}
