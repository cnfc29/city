import { useNavigate } from "react-router";
import styles from "./Plug.module.css";
import { useEffect } from "react";
import QrCode from "../../ui/QrCode/QrCode";
import qrCode from "@content/qr-code/qr-code.svg";
export default function Plug() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleUserActivity = () => {
      navigate("/");
    };

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("mousedown", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);
    window.addEventListener("touchstart", handleUserActivity);

    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("mousedown", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      window.removeEventListener("touchstart", handleUserActivity);
    };
  }, [navigate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.qrCode}>
        <QrCode src={qrCode} plug={true} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Добро пожаловать в СберСити!</div>
        <div className={`text ${styles.textContainer}`}>
          <div>
            Что же такое умный город?
            <br />
            Разбираемся вместе на примере технологий, реализованных
            <br />в проекте: в квартире, в доме и на прилегающей территории.
          </div>
          <div>
            Приглашаем исследовать взаимосвязь систем, которые стоят на службе
            вашего комфорта и безопасности.
          </div>
        </div>
      </div>
    </div>
  );
}
