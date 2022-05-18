import styles from "./Header.module.scss";

export const Header = ({ title }) => (
  <header className={styles.Container}>
    <h1>{title}</h1>
  </header>
);
