import styles from "./Header.module.scss";
import { GoTasklist } from "react-icons/go";
import { useAuth } from "../../hooks/useAuth";

export const Header = ({ title, sideButton }) => {
  const { user } = useAuth();
  const SideButton = () => sideButton || <></>;

  return (
    <header className={styles.Container}>
      <span>
        <GoTasklist color="#334" size="24px" />
      </span>
      <h1>{title}</h1>
      <span>
        <SideButton />
      </span>
    </header>
  );
};
