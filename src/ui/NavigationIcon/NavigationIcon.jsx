import styles from "./NavigationIcon.module.css";
export default function NavigationIcon({ active }) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} ${active && styles.active}`}></div>
    </div>
  );
}
