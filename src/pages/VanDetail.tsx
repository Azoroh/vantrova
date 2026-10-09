import { useParams, Link } from "react-router-dom";
import styles from "./VanDetail.module.css";
import { MOCK_VANS } from "./Vans";
import type { Van } from "./Vans";
import { ArrowLeft } from "lucide-react";

interface VanItem extends Van {
  description: string;
}

export default function VanDetail() {
  const { id } = useParams();

  const van = MOCK_VANS.find((van) => van.id.toString() === id?.toString());

  const MOCK_VAN_WITH_DESC: VanItem = {
    ...van,
    description:
      "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
  };

  const { imageUrl, name, type, price, description } = MOCK_VAN_WITH_DESC;

  if (!van) return <h2>Van not found!</h2>;

  return (
    <main className={styles.page}>
      <Link to="/vans" className={styles.backButton}>
        <ArrowLeft size={16} /> Back to all vans
      </Link>

      <div className={styles.detailContainer}>
        <img
          src={imageUrl}
          alt={`Exterior of ${name}`}
          className={styles.image}
        />

        <i className={`${styles.badge} ${styles[type]}`}>{type}</i>

        <h1 className={styles.title}>{name}</h1>

        <p className={styles.price}>
          <span className={styles.priceAmount}>${price}</span>/day
        </p>

        <p className={styles.description}>{description}</p>

        <button className={styles.rentButton}>Rent this van</button>
      </div>
    </main>
  );
}
