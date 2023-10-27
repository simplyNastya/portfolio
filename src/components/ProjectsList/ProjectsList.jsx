import { Link } from "react-router-dom";
import projects from "../../helpers/projectsList";
import styles from "./projectsList.module.css";

const ProjectsList = () => {
  return (
    <ul className={styles.list}>
      {projects &&
        projects.map((project) => (
          <li key={project.id} className={styles.item}>
            <div className={styles.scale}>
              <Link to={`/projects/${project.id}`} className={styles.link}>
                <img
                  src={project.img[0]}
                  alt={project.title}
                  className={styles.img}
                />
                <p className={styles.title}>{project.title}</p>
              </Link>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default ProjectsList;
