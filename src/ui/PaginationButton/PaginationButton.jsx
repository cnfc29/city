import styles from "./PaginationButton.module.css";

export default function PaginationButton({ children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${active && styles.active}`}
    >
      {children}
    </button>
  );
}
