import styles from "./Background.module.css";
import { Outlet, useLocation } from "react-router-dom";
import video from "@content/background/background.mp4";
import logo from "@content/logo/logo.svg";
import Navbar from "../Navbar/Navbar";
import { ROUTER } from "../../router.config";
import { useInactivityRedirect } from "../../hooks/useInactivityRedirect";

export default function Background() {
  useInactivityRedirect(60000);

  const location = useLocation();

  return (
    <div className={styles.background}>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.containerPage}>
        {location.pathname !== ROUTER.plug &&
          location.pathname !== ROUTER.main && <Navbar />}
        <Outlet />
      </div>
    </div>
  );
}
