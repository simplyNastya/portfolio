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
                  <div
                    className={`${styles.skillProgressBar} ${styles.js}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>RestAPI, CRUD</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.restAPI}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>React</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.react}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Redux, ReduxToolkit</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.redux}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Semantic HTML</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.semantic}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>CSS</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.css}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>SASS/styled-component</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.css}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Chakra.ui</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.chakra}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>
                  Adaptive, Responsible Markup
                </p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.responsive}`}
                  ></div>
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
                  <div
                    className={`${styles.skillProgressBar} ${styles.node}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Express.js</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.express}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>MongoDB</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.mongoDB}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Mongoose</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.mongoose}`}
                  ></div>
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
                  <div
                    className={`${styles.skillProgressBar} ${styles.git}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>WebPack, Vite, Parcel</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.bundlers}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Figma</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.figma}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Postman</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.postman}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Swagger</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.swagger}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Axios</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.axios}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>WebSockets</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.webSockets}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Socket.io</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.socket}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>unit testing</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.unit}`}
                  ></div>
                </div>
              </li>
              <li className={styles.skillItem}>
                <p className={styles.skillTitle}>Docker</p>
                <div className={styles.skillProgressBarContainer}>
                  <div
                    className={`${styles.skillProgressBar} ${styles.docker}`}
                  ></div>
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
