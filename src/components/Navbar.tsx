import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <Logo size={48} />
      </NavLink>

      <nav>
        <ul className={styles.links}>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }): string =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/vans"
              className={({ isActive }): string =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
