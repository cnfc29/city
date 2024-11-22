import { useParams } from "react-router";
import styles from "./Developer.module.css";
import data from "../../data/developer.json";
import Title from "../../ui/Title/Title";
// import Description from "../../ui/Description/Description";
// import QrCode from "../../ui/QrCode/QrCode";
// import qrCode from "@content/qr-code/qr-code.svg";
import Pagination from "../../ui/Pagination/Pagination";
import { ROUTER } from "../../router.config";

export default function Developer() {
  const { id } = useParams();

  const developer = data.find((el) => el.id === +id);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title title={developer.title} />
        {/* <div className={styles.wrapper}>
          <Description descriptions={developer.descriptions} />
          {+id === data.length && (
            <QrCode style={{ marginRight: "144px" }} src={qrCode} />
          )}
        </div> */}
      </div>
      <Pagination data={data} route={ROUTER.developer} />
    </div>
  );
}
