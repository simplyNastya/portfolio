import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const activeLink = `${styles.link} ${styles.active}`;
  const normalLink = `${styles.link}`;

  return (
    <header className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <NavLink to="/" className={`${styles.logo} ${styles.link}`}>
            Portfolio
          </NavLink>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                  to="/stack"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
