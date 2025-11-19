import { useContext } from 'react';
import { RestaurantContext } from '../../../RestaurantContext/restaurantContext';
import styles from './About.module.css';

const About = () => {
    const { about } = useContext(RestaurantContext);

    return (
    <section className={styles.about}>
      <div className={styles.textColumn}>
        <h1>{about.name}</h1>
        <h4>{about.location}</h4>
        <p>{about.description}</p>
      </div>
      <div className={styles.imageColumn}>
        <img src={about.image1} alt="chefs working" />
        <img src={about.image2} alt="chef working" />
      </div>
    </section>
    );
}
export default About;