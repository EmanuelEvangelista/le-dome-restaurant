import { useContext } from 'react';
import { RestaurantContext } from '../../../RestaurantContext/restaurantContext';
import styles from './Intro.module.css';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const { intro } = useContext(RestaurantContext);
    const navigate = useNavigate();

    const handleClick = () => {
    navigate("/reservation");
    };

    return (
        <section className={styles.introduction}>
            <div className={styles.textColumn}>
                <h2 aria-label="Introduction Title">{intro.title}</h2>
                <h4 aria-label="Location">{intro.location}</h4>
                <p aria-label="Description">{intro.description}</p>
                <button aria-label="Go to the reservation page" onClick={handleClick}>{intro.buttonText}</button>
            </div>
            <img src={intro.image} alt="Restaurant Interior" />
        </section>
    );
}

export default Intro;
