import React from 'react';
import logo from '../../assets/icon/logo2.png';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <a href="/" className={styles.logo}>
      <img className={styles.logoImage} src={logo} alt="Le Dôme Restaurant Logo" />
    </a>
  </header>
);

export default Header;