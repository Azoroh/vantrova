import styles from "./About.module.css";
import aboutHeroImg from "../assets/about_hero.png";
import { Link } from "react-router-dom";
import { Van } from "lucide-react";

export default function About() {
  return (
    <main className={styles.page}>
      <img
        src={aboutHeroImg}
        alt="A van with its roof tent open under a starry sky"
        className={styles.hero}
      />

      <section className={styles.intro}>
        <h1 className={styles.heading}>
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className={styles.text}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
        </p>
        <p className={`${styles.text} ${styles.hitchText}`}>
          (Hitch costs extra <Van size={16} />)
        </p>
      </section>

      <section className={styles.callout}>
        <h2 className={styles.calloutHeading}>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>

        <Link to="/vans" className={`btn-primary ${styles.button}`}>
          Explore our vans
        </Link>
      </section>
    </main>
  );
}
