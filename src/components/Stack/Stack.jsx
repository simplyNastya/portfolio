import styles from "./stack.module.css";

const Stack = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Tech stack</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h2 className={styles.itemTitle}>Frontend</h2>
            <ul className={styles.skillList}>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>JavaScript</p>
                <div className={styles.skillProgressBarContainer}>
                  <div className={`${styles.skillProgressBar} ${styles.js}`}>
                    90%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>RestAPI, CRUD</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.restAPI}`}
                  >
                    95%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>React</p>
                <div className={styles.skillProgressBarContainer}>
                  <div className={`${styles.skillProgressBar} ${styles.react}`}>
                    95%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Redux, ReduxToolkit</p>
                <div className={styles.skillProgressBarContainer}>
                  <div className={`${styles.skillProgressBar} ${styles.redux}`}>
                    90%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Semantic HTML</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.semantic}`}
                  >
                    100%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>CSS</p>
                <div className={styles.skillProgressBarContainer}>
                  <div className={`${styles.skillProgressBar} ${styles.css}`}>
                    95%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>SASS/styled-component</p>
                <div className={styles.skillProgressBarContainer}>
                  <div className={`${styles.skillProgressBar} ${styles.css}`}>
                    95%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Chakra.ui</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.chakra}`}
                  >
                    50%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>
                  Adaptive, Responsible Markup
                </p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.responsive}`}
                  >
                    95%
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.itemTitle}>Backend</h2>
            <ul className={styles.skillList}>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Node.js</p>
                <div className={styles.skillProgressBarContainer}>
                  <div className={`${styles.skillProgressBar} ${styles.node}`}>
                    65%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Express.js</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.express}`}
                  >
                    90%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>MongoDB</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.mongoDB}`}
                  >
                    85%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Mongoose</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.mongoose}`}
                  >
                    85%
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.itemTitle}>Additional Tools</h2>
            <ul className={styles.skillList}>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Git</p>
                <div className={styles.skillProgressBarContainer}>
                  <div className={`${styles.skillProgressBar} ${styles.git}`}>
                    85%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>WebPack, Vite, Parcel</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.bundlers}`}
                  >
                    93%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Figma</p>
                <div className={styles.skillProgressBarContainer}>
                  <div className={`${styles.skillProgressBar} ${styles.figma}`}>
                    93%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Postman</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.postman}`}
                  >
                    96%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Swagger</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.swagger}`}
                  >
                    83%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Axios</p>
                <div className={styles.skillProgressBarContainer}>
                  <div className={`${styles.skillProgressBar} ${styles.axios}`}>
                    96%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>WebSockets</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.webSockets}`}
                  >
                    50%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Socket.io</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.socket}`}
                  >
                    50%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>unit testing</p>
                <div className={styles.skillProgressBarContainer}>
                  <div className={`${styles.skillProgressBar} ${styles.unit}`}>
                    16%
                  </div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Docker</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.docker}`}
                  >
                    16%
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stack;
