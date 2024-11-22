import { useParams } from "react-router";
import GradientTextBlock from "../../ui/GradientTextBlock/GradientTextBlock";
import styles from "./Citizen.module.css";
import data from "../../data/citizens.json";
import Title from "../../ui/Title/Title";
import Description from "../../ui/Description/Description";
import Pagination from "../../ui/Pagination/Pagination";
import { ROUTER } from "../../router.config";
import QrCode from "../../ui/QrCode/QrCode";
import qrCode from "@content/qr-code/qr-code.svg";

export default function Citizen() {
  const { id } = useParams();

  const citizen = data.find((el) => el.id === +id);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <GradientTextBlock />
        <div className={styles.content}>
          <Title title={citizen.title} />
          <div className={styles.wrapper}>
            <Description descriptions={citizen.descriptions} />
            {+id === data.length && (
              <QrCode style={{ marginRight: "144px" }} src={qrCode} />
            )}
          </div>
        </div>
      </div>
      <Pagination data={data} route={ROUTER.citizen} />
    </div>
  );
}
