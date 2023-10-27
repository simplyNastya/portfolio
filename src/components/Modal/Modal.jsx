import { useEffect } from "react";
import { createPortal } from "react-dom";

import { CgClose } from "react-icons/cg";

import styles from "./modal.module.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ closeModal, component }) => {
  useEffect(() => {
    document.body.addEventListener("keydown", handleClose);
    return () => {
      document.body.removeEventListener("keydown", handleClose);
    };
  });

  const handleClose = (e) => {
    if (e.currentTarget === e.target || e.code === "Escape") {
      closeModal();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal}>
        <button className={styles.button} type="button" onClick={closeModal}>
          <CgClose className={styles.svg} />
        </button>
        {component}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
