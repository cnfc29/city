import { useParams } from "react-router";
import styles from "./Integrator.module.css";
import Title from "../../ui/Title/Title";
import Pagination from "../../ui/Pagination/Pagination";
import { ROUTER } from "../../router.config";
import data from "../../data/integrator.json";

export default function Integrator() {
  const { id } = useParams();

  const developer = data.find((el) => el.id === Number(id));

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title title={developer.title} />
        {/* <div className={styles.wrapper}>
          <Description descriptions={developer.descriptions} />
          {Number(id) === data.length && (
            <QrCode style={{ marginRight: "144px" }} src={qrCode} />
          )}
        </div> */}
      </div>
      <Pagination data={data} route={ROUTER.integrator} />
    </div>
  );
}
