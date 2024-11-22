import { useParams } from "react-router";
import styles from "./ManagementCompany.module.css";
import Title from "../../ui/Title/Title";
import Pagination from "../../ui/Pagination/Pagination";
import { ROUTER } from "../../router.config";
import data from "../../data/managementCompany.json";

export default function ManagementCompany() {
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
      <Pagination data={data} route={ROUTER.managementCompany} />
    </div>
  );
}
