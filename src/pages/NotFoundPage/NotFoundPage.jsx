import styles from "./notFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main>
      <div className={styles.section}>
        <div className="container">
          <h1 className={styles.title}>ERROR 404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
