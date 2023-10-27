import styles from "./stack.module.css";

const Stack = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <ul className={styles.list}>
          <li className={styles.item}>
            <h2 className={styles.title}>Frontend</h2>
            <p className={styles.subtitle}>
              JavaScript, CRUD, React(life cycle, hooks, routing), Redux, Redux
              Toolkit, Semantics HTML, CSS/SASS, Responsive/Adaptive Layout
            </p>
          </li>
          <li className={styles.item}>
            <h2 className={styles.title}>Backend</h2>
            <p className={styles.subtitle}>
              Node.js, Express, MongoDB, Mongoose, unit testing, Docker,
              WebSockets
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stack;
