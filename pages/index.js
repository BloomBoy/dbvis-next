import Head from "next/head";
import Image from "next/image";

// 3rd Party Imports
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Components
import { getPage } from "contentful/index.js";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{data.fields.internalName}</h1>

        <p className={styles.description}>
          <code className={styles.code}>{data.fields.mainHeader}</code>
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>{data.fields.subheader1} &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a className={styles.card}>
            <h2>{data.fields.subheader2} &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <a className={styles.card}>
            <h2>Rich Text Renderer &rarr;</h2>
            {documentToReactComponents(data.fields.paragraph1)}
          </a>
          <a className={styles.card}>
            <h2>Rich Text Renderer &rarr;</h2>
            {documentToReactComponents(data.fields.paragraph2)}
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getPage({
    pageContentType: "headerLeftAndTwoColumnParagraphWithHeader",
    slug: "One tool for all databases and OSes",
  });
  return {
    props: { data: data.items[0] }, // will be passed to the page component as props
  };
}
