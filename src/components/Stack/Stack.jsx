import styles from "./stack.module.css";

const Stack = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Tech stack</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h2 className={styles.itemTitle}>Frontend</h2>
            <p className={styles.subtitle}>
              JavaScript, RestAPI, CRUD, React(life cycle, hooks, routing),
              Redux, Redux Toolkit, Semantics HTML, CSS/SASS,
              Responsive/Adaptive Layout
            </p>
          </li>
          <li className={styles.item}>
            <h2 className={styles.itemTitle}>Backend</h2>
            <p className={styles.subtitle}>
              Node.js, Express, MongoDB, Mongoose, unit testing, Docker,
              WebSockets, Socket.io
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stack;
