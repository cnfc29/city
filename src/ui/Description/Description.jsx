import styles from "./Description.module.css";

export default function Description({ descriptions }) {
  return (
    <div className={`text ${styles.container}`}>
      {descriptions.map((el, index) => (
        <span key={index}>
          {el}
          {index !== descriptions.length - 1 && <br />}
        </span>
      ))}
    </div>
  );
}
