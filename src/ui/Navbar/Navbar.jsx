import { useNavigate } from "react-router";
import LinkNav from "../Link/LinkNav";
import styles from "./Navbar.module.css";
import { ROUTER } from "../../router.config";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Технологии
        <br />и преимущества Умного города
      </div>
      <div className={styles.linksContainer}>
        <LinkNav onClick={() => navigate(ROUTER.citizen)} to={ROUTER.citizen}>
          Житель
        </LinkNav>
        <LinkNav
          onClick={() => navigate(ROUTER.developer)}
          to={ROUTER.developer}
        >
          Девелопер
        </LinkNav>
        <LinkNav
          onClick={() => navigate(ROUTER.integrator)}
          to={ROUTER.integrator}
        >
          Интегратор
        </LinkNav>
        <LinkNav
          onClick={() => navigate(ROUTER.managementCompany)}
          to={ROUTER.managementCompany}
        >
          Управляющая компания
        </LinkNav>
      </div>
    </div>
  );
}
