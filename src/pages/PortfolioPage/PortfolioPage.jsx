import ProjectsList from "../../components/ProjectsList/ProjectsList";
import styles from "./portfolioPage.module.css";

const PortfolioPage = () => {
  return (
    <main>
      <div className={styles.section}>
        <div className="container">
          <h1 className={styles.title}>Projects</h1>
          <ProjectsList />
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
