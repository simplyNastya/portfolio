import styles from "./contactsPage.module.css";

const ContactsPage = () => {
  return (
    <main>
      <div className={styles.section}>
        <div className="container">
          <h1 className={styles.title}>Contacts</h1>
          <div className={styles.wrapper}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <h2 className={styles.subtitle}>Email</h2>
                <p className={styles.text}>
                  <a
                    href="mailto:koretska.anastasiia@gmail.com"
                    className={styles.link}
                  >
                    koretska.anastasiia@gmail.com
                  </a>
                </p>
              </li>
              <li className={styles.item}>
                <h2 className={styles.subtitle}>Phone</h2>
                <p className={styles.text}>
                  <a href="tel:+420607358240" className={styles.link}>
                    +420607358240
                  </a>
                </p>
              </li>
              <li className={styles.item}>
                <h2 className={styles.subtitle}>
                  Telegram / WhatsApp / Viber{" "}
                </h2>
                <p className={styles.text}>+380990416080</p>
              </li>
              <li className={styles.item}>
                <h2 className={styles.subtitle}>Location</h2>
                <p className={styles.text}>Czech Republic, Praha</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactsPage;
