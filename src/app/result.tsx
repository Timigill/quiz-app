import { useRouter } from "next/router";
import styles from "./result.module.css"; // CSS Module import

const Result = () => {
  const router = useRouter();
  const { score, total } = router.query;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Your Score</h1>
      <p className={styles.score}>
        {score} / {total}
      </p>
      <button className={styles.button} onClick={() => router.push("/")}>
        Restart
      </button>
    </div>
  );
};

export default Result;
