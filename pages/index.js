import Head from "next/head";
import styles from "../styles/Home.module.css";
import Opening from "components/opening";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <Opening />
      </main>
    </div>
  );
}
