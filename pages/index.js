import Head from "next/head";
import styles from "../styles/Home.module.css";
import Detail from "components/detail";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <img src="static/opening1.jpg" alt="" />
      </main>
    </div>
  );
}
