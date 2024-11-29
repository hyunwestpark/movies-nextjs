import styles from "../styles/loading.module.css";

export default function Spinner() {
  return (
    <div className={styles["loader-container"]}>
      <div className={styles.loader}></div>
    </div>
  );
}
