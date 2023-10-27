import { useParams } from "react-router-dom";

import projects from "../../helpers/projectsList";

import styles from "./projectDetailsDescription.module.css";

const ProjectDetailsDescription = () => {
  const { id } = useParams();

  const project = projects.find((option) => {
    return option.id === id;
  });

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{project.about.greeting}</h2>
        <p className={styles.subtitle}>{project.about.subtitle}</p>
        {project.about.features.authorizes ? (
          <div>
            <p className={styles.featuresTitle}>
              Features for Authorized Users:
            </p>
            <ol className={styles.featuresList}>
              {project.about.features.authorizes.map(({ id, name, text }) => (
                <li key={id} className={styles.featuresItem}>
                  <p className={styles.featuresText}>
                    <span className={styles.featuresName}>{name}</span>: {text}
                  </p>
                </li>
              ))}
            </ol>
            <p className={styles.featuresTitle}>
              Features for Unauthorized Users:
            </p>
            <ol className={styles.featuresList}>
              {project.about.features.unauthorized.map(({ id, name, text }) => (
                <li key={id} className={styles.featuresItem}>
                  <p className={styles.featuresText}>
                    <span className={styles.featuresName}>{name}</span>: {text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div>
            <p className={styles.featuresTitle}>Key Features:</p>
            <ol className={styles.featuresList}>
              {project.about.features.map(({ id, name, text }) => (
                <li key={id} className={styles.featuresItem}>
                  <p className={styles.featuresText}>
                    <span className={styles.featuresName}>{name}</span>: {text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetailsDescription;
