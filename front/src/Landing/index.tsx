import { Widget } from "components/Widget";
import styles from "./styles.module.css";

export const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.header}>
          <div className={styles.headerBrand} />

          <ul className={styles.headerNav}>
            <li className={styles.navBox} />
            <li className={styles.navBox} />
            <li className={styles.navBox} />
            <li className={styles.navBox} />
          </ul>

          <div className={styles.headerProfile}>
            <div className={styles.profileBox} />
            <div className={styles.profileBox} />

            <div className={styles.profileAvatar} />
          </div>
        </div>
      </header>

      <main>
        <div className={styles.main}>
          <div className={styles.mainHorizontal}>
            <p>Experimente enviar um feedback de um bug na aplicação 🐛</p>
          </div>

          <div className={styles.mainBox} />
          <div className={styles.mainBox} />
          <div className={styles.mainBox} />
          <div className={styles.mainBox} />
          <div className={styles.mainBox} />
        </div>
      </main>

      <Widget />
    </div>
  );
};
