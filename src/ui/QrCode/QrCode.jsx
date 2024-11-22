import styles from "./QrCode.module.css";

export default function QrCode({ src, plug, style }) {
  return (
    <img
      className={`${styles.img} ${plug && styles.plug}`}
      style={style}
      src={src}
      alt="Qr-code"
    />
  );
}
