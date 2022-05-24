import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./Template.module.scss";

const Template = ({ title, children }) => {
  return (
    <div className={styles.Container}>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Template;
