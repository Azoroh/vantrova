import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./Vans.module.css";
import { nanoid } from "nanoid";

// TODO: Move to a shared types file later
export type VanType = "simple" | "luxury" | "rugged";

export interface Van {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: VanType;
}

// Mock data based on your Figma design
const MOCK_VANS: Van[] = [
  {
    id: nanoid(),
    name: "Modest Explorer",
    price: 60,
    type: "simple",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
  },
  {
    id: nanoid(),
    name: "Beach Bum",
    price: 80,
    type: "rugged",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
  },
  {
    id: nanoid(),
    name: "Reliable Red",
    price: 100,
    type: "luxury",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
  },
  {
    id: nanoid(),
    name: "Dreamfinder",
    price: 65,
    type: "simple",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
  },
  {
    id: nanoid(),
    name: "Modest Explorer",
    price: 60,
    type: "simple",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
  },
  {
    id: nanoid(),
    name: "Beach Bum",
    price: 80,
    type: "rugged",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
  },
  {
    id: nanoid(),
    name: "Reliable Red",
    price: 100,
    type: "luxury",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
  },
  {
    id: nanoid(),
    name: "Dreamfinder",
    price: 65,
    type: "simple",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
  },
];

export default function Vans() {
  const [vans, setVans] = useState<Van[]>(MOCK_VANS);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Explore our van options</h1>

      <div className={styles.filters}>
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`${styles.filterBtn} ${typeFilter === "simple" ? styles.selected : ""}`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`${styles.filterBtn} ${typeFilter === "luxury" ? styles.selected : ""}`}
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`${styles.filterBtn} ${typeFilter === "rugged" ? styles.selected : ""}`}
        >
          Rugged
        </button>

        {typeFilter && (
          <button
            onClick={() => setSearchParams({})}
            className={styles.clearFilters}
          >
            Clear
          </button>
        )}
      </div>

      <div className={styles.vanGrid}>
        {displayedVans.map((van) => (
          <Link to={`/vans/${van.id}`} key={van.id} className={styles.vanCard}>
            <img
              src={van.imageUrl}
              alt={`Photo of ${van.name}`}
              className={styles.vanImage}
            />
            <div className={styles.vanDetail}>
              <div className={styles.vanInfo}>
                <h2 className={styles.vanName}>{van.name}</h2>
                <i className={`${styles.vanBadge} ${styles[van.type]}`}>
                  {van.type}
                </i>
              </div>
              <div className={styles.priceContainer}>
                <span className={styles.vanPrice}>${van.price}</span>
                <span className={styles.vanDay}>/day</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
