import { useParams } from "react-router-dom";

import projects from "../../helpers/projectsList";

import styles from "./projectDetailsResponsibilities.module.css";

const ProjectDetailsResponsibilities = () => {
  const { id } = useParams();

  const project = projects.find((option) => {
    return option.id === id;
  });

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{project.responsibilities.title}</h2>
        <p className={styles.subtitle}>{project.responsibilities.subtitle}</p>
        <p className={styles.responsibilitiesTitle}>
          Here are my key contributions:
        </p>
        {project.responsibilities.backend ? (
          <div>
            <p className={styles.responsibilitiesSubtitle}>
              Backend Development:
            </p>
            <ol className={styles.responsibilitiesList}>
              {project.responsibilities.backend.map(({ id, name, text }) => (
                <li key={id} className={styles.responsibilitiesItem}>
                  <p className={styles.responsibilitiesText}>
                    <span className={styles.responsibilitiesName}>{name}</span>:{" "}
                    {text}
                  </p>
                </li>
              ))}
            </ol>
            <p className={styles.responsibilitiesSubtitle}>
              Frontend Development:
            </p>
            <ol className={styles.responsibilitiesList}>
              {project.responsibilities.frontend.map(({ id, name, text }) => (
                <li key={id} className={styles.responsibilitiesItem}>
                  <p className={styles.responsibilitiesText}>
                    <span className={styles.responsibilitiesName}>{name}</span>:{" "}
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div>
            <p className={styles.responsibilitiesSubtitle}>
              Frontend Development:
            </p>
            <ol className={styles.responsibilitiesList}>
              {project.responsibilities.frontend.map(({ id, name, text }) => (
                <li key={id} className={styles.responsibilitiesItem}>
                  <p className={styles.responsibilitiesText}>
                    <span className={styles.responsibilitiesName}>{name}</span>:{" "}
                    {text}
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

export default ProjectDetailsResponsibilities;
