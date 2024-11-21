import styles from "./GradientTextBlock.module.css";

export default function GradientTextBlock() {
  return (
    <div className={styles.container}>
      Управляйте светом, климатом, шторами и тёплыми полами в квартире,
      <br />
      <span className={styles.lastText}>
        а также коммуникациями во всём здании
      </span>
    </div>
  );
}
