import React from 'react';
import { RestaurantContext } from '../../../RestaurantContext/restaurantContext';
import styles from './Intro.module.css';

const Intro = () => {
    const { intro } = React.useContext(RestaurantContext);

    return (
        <section className={styles.introduction}>
            <div className={styles.textColumn}>
                <h2>{intro.title}</h2>
                <h4>{intro.location}</h4>
                <p>{intro.description}</p>
                <button>{intro.buttonText}</button>
            </div>
            <img src={intro.image} alt="Restaurant Interior" />
        </section>
    );
}

export default Intro;
