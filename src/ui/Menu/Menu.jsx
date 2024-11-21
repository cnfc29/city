import { useNavigate } from "react-router";
import MenuButton from "../MenuButton/MenuButton";
import styles from "./Menu.module.css";
import { ROUTER } from "../../router.config";

export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <MenuButton onClick={() => navigate(ROUTER.citizen)}>
        Для Жителя
      </MenuButton>
      <MenuButton onClick={() => navigate(ROUTER.developer)}>
        Для Девелопера
      </MenuButton>
      <MenuButton onClick={() => navigate(ROUTER.integrator)}>
        Для Интегратора
      </MenuButton>
      <MenuButton onClick={() => navigate(ROUTER.managementCompany)}>
        Для Упр.компании
      </MenuButton>
    </div>
  );
}
