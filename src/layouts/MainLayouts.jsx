import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './MainLayout.css';

export default function MainLayout({ children }) {
  return (
    <div className="mainLayoutContainer">
      <div className="topbar">
        <Header />
        <Navbar />
      </div>
      <main className="mainContent">{children}</main>
      <Footer />
    </div>
  );
}
