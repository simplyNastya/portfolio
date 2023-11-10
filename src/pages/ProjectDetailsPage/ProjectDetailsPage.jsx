import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import Modal from "../../components/Modal/Modal";
import ProjectDetailsDescription from "../../components/ProjectDetailsDescription/ProjectDetailsDescription";
import ProjectDetailsTechnologies from "../../components/ProjectDetailsTechnologies/ProjectDetailsTechnologies";
import ProjectDetailsResponsibilities from "../../components/ProjectDetailsResponsibilities/ProjectDetailsResponsibilities";

import SwiperGallery from "../../components/SwiperGallery/SwiperGallery";

import { ImGithub } from "react-icons/im";

import projects from "../../helpers/projectsList";
import styles from "./projectDetailsPage.module.css";

// const modalRoot = document.getElementById("modal-root");

const ProjectDetailsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/projects";

  const project = projects.find((option) => {
    return option.id === id;
  });

  const goBack = () => navigate(from);

  const handleModal = (component) => {
    setModalContent(component);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main>
      {showModal && <Modal closeModal={closeModal} component={modalContent} />}
      <div className={styles.section}>
        <div className="container">
          <button onClick={goBack} type="button" className={styles.goBackBtn}>
            Go back
          </button>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.animationWrapper}>
            <SwiperGallery />

            <ul className={styles.subpagesList}>
              <li className={styles.subpagesItem}>
                <button
                  type="button"
                  onClick={() => {
                    handleModal(<ProjectDetailsDescription />);
                  }}
                  className={styles.subpagesBtn}
                >
                  Description
                </button>
              </li>
              <li className={styles.subpagesItem}>
                <button
                  type="button"
                  onClick={() => {
                    handleModal(<ProjectDetailsTechnologies />);
                  }}
                  className={styles.subpagesBtn}
                >
                  Technologies
                </button>
              </li>
              <li className={styles.subpagesItem}>
                <button
                  type="button"
                  onClick={() => {
                    handleModal(<ProjectDetailsResponsibilities />);
                  }}
                  className={styles.subpagesBtn}
                >
                  My responsibilities
                </button>
              </li>
            </ul>
            <ul className={styles.linksList}>
              <li className={styles.linksItem}>
                <a
                  href={project.gitHubPagesLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.gitHubLink}
                >
                  <ImGithub className={styles.svg} />
                  Live Page
                </a>
              </li>
              <li className={styles.linksItem}>
                <a
                  href={project.gitHubFrontendLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.gitHubLink}
                >
                  <ImGithub className={styles.svg} />
                  GitHub repo <br /> front
                </a>
              </li>
              {project.gitHubBackendLink && (
                <li className={styles.linksItem}>
                  <a
                    href={project.gitHubBackendLink}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.gitHubLink}
                  >
                    <ImGithub className={styles.svg} />
                    GitHub repo <br /> back
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetailsPage;
