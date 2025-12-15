import { Link } from 'react-router-dom';
import logo from '../../assets/icon/logo2.png';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Link to="/" className={styles.logo}>
      <img className={styles.logoImage} src={logo} alt="Le Dôme Restaurant Logo" />
    </Link>
  </header>
);

export default Header;