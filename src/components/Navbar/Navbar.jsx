import { NavLink } from "react-router-dom";
import { useState } from "react";

import { CgClose } from "react-icons/cg";

// import MobileMenu from "../MobileMenu/MobileMenu";

import { RxHamburgerMenu } from "react-icons/rx";

import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const activeLink = `${styles.link} ${styles.active}`;
  const normalLink = `${styles.link}`;

  const toggleMobileMenu = () => {
    setIsOpenMobile(!isOpenMobile);
  };

  return (
    <header className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <NavLink to="/" className={`${styles.logo} ${styles.link}`}>
            Portfolio
          </NavLink>

          <button
            className={styles.burgerMenuBtn}
            onClick={() => toggleMobileMenu()}
          >
            <RxHamburgerMenu className={styles.burgerMenuIcon} />
          </button>

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

      {/* <MobileMenu /> */}

      <div
        className={
          isOpenMobile
            ? `${styles.containerMobile} ${styles.isOpen}`
            : `${styles.containerMobile}`
        }
      >
        <button className={styles.closeBtn} onClick={() => toggleMobileMenu()}>
          <CgClose className={styles.closeBtnIcon} />
        </button>
        <nav className={styles.navMobile}>
          <ul className={styles.listMobile}>
            <li className={styles.itemMobile}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={() => toggleMobileMenu()}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.itemMobile}>
              <NavLink
                to="/stack"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={() => toggleMobileMenu()}
              >
                Skills
              </NavLink>
            </li>
            <li className={styles.itemMobile}>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={() => toggleMobileMenu()}
              >
                Projects
              </NavLink>
            </li>
            <li className={styles.itemMobile}>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={() => toggleMobileMenu()}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
