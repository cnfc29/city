import GradientTextBlock from "../../ui/GradientTextBlock/GradientTextBlock";
import Menu from "../../ui/Menu/Menu";
import styles from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={styles.container}>
      <GradientTextBlock />
      <Menu />
    </div>
  );
}
