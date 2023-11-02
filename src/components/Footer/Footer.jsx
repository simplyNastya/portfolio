import { ImGithub, ImLinkedin } from "react-icons/im";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a
                href="https://github.com/simplyNastya"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.link}
              >
                <ImGithub className={styles.svg} />
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://www.linkedin.com/in/anastasiia-koretska-558bba233/"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.link}
              >
                <ImLinkedin className={styles.svg} />
              </a>
            </li>
          </ul>
          <div className={styles.textWrap}>
            <p className={styles.text}>© 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
