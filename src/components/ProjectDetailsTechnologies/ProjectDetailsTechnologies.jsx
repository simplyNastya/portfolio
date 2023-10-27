import { useParams } from "react-router-dom";

import projects from "../../helpers/projectsList";

import styles from "./projectDetailsTechnologies.module.css";

const ProjectDetailsTechnologies = () => {
  const { id } = useParams();

  const project = projects.find((option) => {
    return option.id === id;
  });

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.text}>{project.skills}</p>
      </div>
    </section>
  );
};

export default ProjectDetailsTechnologies;
