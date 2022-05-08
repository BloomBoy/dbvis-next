/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

// Components
import { getPage } from "contentful/index.js";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{data?.fields?.seo?.fields?.title}</title>
        <meta
          name="description"
          content={data?.fields?.seo?.fields?.description}
        />
        <link rel="icon" href="/favicon.ico" />
        {data.fields?.seo?.fields?.noFollow && (
          <>
            <meta key="robots" name="robots" content="nofollow" />
            <meta key="googlebot" name="googlebot" content="nofollow" />
          </>
        )}
        {data?.fields?.seo?.fields?.noFollow && (
          <>
            <meta key="robots" name="robots" content="noindex" />
            <meta key="googlebot" name="googlebot" content="noindex" />
          </>
        )}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{data?.fields?.internalTitle}</h1>

        <p className={styles.description}>
          Slug
          <code className={styles.code}>{data?.fields?.slug}</code>
        </p>

        <div>
          <p className={styles.description}>
            {data.fields?.hero?.fields?.internalName}
          </p>
          <img
            src={
              data.fields?.hero?.fields?.image?.fields?.imageFile?.fields?.file
                ?.url
            }
            alt={data.fields?.hero?.fields?.image?.fields?.alt}
            loading="lazy"
          />
        </div>
        <div className={styles.grid}>
          {data?.fields?.sections?.map((section) => (
            <a className={styles.card} key={section?.sys?.id}>
              <h2>{section.fields?.sectionName} &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          ))}
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
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getPage({
    pageContentType: "mainPage",
    slug: "index",
  });
  return {
    props: { data: data.items[0] }, // will be passed to the page component as props
  };
}
