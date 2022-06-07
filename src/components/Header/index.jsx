import styles from "./Header.module.scss";
import { GoTasklist } from "react-icons/go";

export const Header = ({ title, sideButton }) => {
  const SideButton = () => sideButton || <></>;
  return (
    <header className={styles.Container}>
      <GoTasklist color="#334" size="24px" />
      <h1>{title}</h1>
      <span>
        <SideButton />
      </span>
    </header>
  );
};
