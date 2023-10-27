import CVPdf from "./Koretska_Anastasiia_FullStackDeveloper.pdf";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            <strong>
              Hello, my name is
              <p className={styles.em}>Anastasiia</p>
            </strong>
            <p>I`m a fullstack developer</p>
          </h1>
          <div className={styles.text}>
            <p>with passion for learning and creating.</p>
          </div>
          <a href={CVPdf} download={CVPdf} className={styles.cvLink}>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
