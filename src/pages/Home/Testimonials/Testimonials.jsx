import React from 'react';
import { RestaurantContext } from '../../../RestaurantContext/restaurantContext';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const { testimonialsList } = React.useContext(RestaurantContext);

    return (
        <section className={styles.testimonials}>
        <h2>Testimonials</h2>
            {testimonialsList.map((testimonial) => (
                <article key={testimonial.key}>
                    <img src={testimonial.image} alt={testimonial.name} />
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.feedback}</p>
                </article>
            ))}
        </section>
    );
}

export default Testimonials;