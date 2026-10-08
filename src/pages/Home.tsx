import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.hero}>
      <img src={heroImg} alt="" className={styles.heroImage} />

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          You got the travel plans, we got the travel vans.
        </h1>

        <p className={styles.text}>
          Add adventure to your life by joining the VANtrova movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <Link to="/vans" className={styles.button}>
          Find your van
        </Link>
      </div>
    </main>
  );
}
