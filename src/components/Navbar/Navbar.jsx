import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Función para alternar el estado
  };
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      {/* Botón de Hamburguesa */}
      <button
        type="button"
        className={styles.hamburgerIcon}
        onClick={toggleMenu}
      >
        <GiHamburgerMenu />
      </button>

      {/* Contenedor de Enlaces - su visibilidad se controlará con el estado y CSS */}
      <ul ref={menuRef} className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
      <li><NavLink to="/" end onClick={toggleMenu} className={({isActive}) => isActive ? styles.active : ''}>HOME</NavLink></li>
      <li><NavLink to="/about" onClick={toggleMenu} className={({isActive}) => isActive ? styles.active : ''}>ABOUT</NavLink></li>
      <li><NavLink to="/menu" onClick={toggleMenu} className={({isActive}) => isActive ? styles.active : ''}>MENU</NavLink></li>
      <li><NavLink to="/reservation" onClick={toggleMenu} className={({isActive}) => isActive ? styles.active : ''}>RESERVATION</NavLink></li>
      <li><NavLink to="/order-online" onClick={toggleMenu} className={({isActive}) => isActive ? styles.active : ''}>ORDER ONLINE</NavLink></li>
      <li><NavLink to="/login" onClick={toggleMenu} className={({isActive}) => isActive ? styles.active : ''}>LOGIN</NavLink></li>
      </ul>
      <div className={styles.themeBtn}>
       <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;
