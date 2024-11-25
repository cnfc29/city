import styles from "./Description.module.css";

export default function Description({ descriptions, bold }) {
  return (
    <div className={`text ${styles.container} ${bold && styles.bold}`}>
      {descriptions?.map((el, index) => (
        <span key={index}>
          {el}
          {index !== descriptions.length - 1 && <br />}
        </span>
      ))}
    </div>
  );
}
