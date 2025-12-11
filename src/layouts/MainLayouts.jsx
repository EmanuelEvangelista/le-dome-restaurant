import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CartIcon from "../components/CartIcon/CartIcon.jsx"
import CartModal from "../Modal/CartModal.jsx";
import Styles from './MainLayout.module.css';

export default function MainLayout({ children }) {
  return (
    <div className={Styles.mainLayoutContainer}>
      <div className={Styles.topbar}>
        <Header />
        <Navbar />
        <CartIcon />
      </div>
      <CartModal />
      <main className={Styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}
