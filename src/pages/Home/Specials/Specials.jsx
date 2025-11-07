import React from 'react';
import { RestaurantContext } from '../../../RestaurantContext/restaurantContext';
import styles from './Specials.module.css';
import { NavLink } from 'react-router-dom';

const Specials = () => {
    const { specials } = React.useContext(RestaurantContext);

    return (
        <section className={styles.specials}>
        <h2>Specials</h2>
        {specials.map((meal) => (
          <article key={meal.key} className={styles.specialItem}>
            <img src={meal.image} alt={meal.title} />
            <div className={styles.titlePrice}>
                <h3>{meal.title}</h3>
                <span>{meal.price}</span>
            </div>
            <p>{meal.description}</p>
            <NavLink to="/order-online" className={({isActive}) => `${styles.links} ${isActive ? styles.active : ''}`}>Order a delivery 🔗</NavLink>
          </article>
        ))}
            </section>
    );
}

export default Specials;