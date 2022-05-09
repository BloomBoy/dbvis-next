/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

// Contentful
import { getPage } from "contentful/index.js";
// Components
import Seo from "components/Seo";
import Header from "components/Header";
import Hero from "components/Hero";
import Sections from "components/Section/Section";
import Footer from "components/Footer";
// Styles
import styles from "styles/Home.module.css";

export default function Contact({ seo, hero, title, slug, sections }) {
  return (
    <div className={styles.container}>
      <Seo
        title={seo?.fields?.title}
        description={seo?.fields?.description}
        noFollow={seo?.fields?.noFollow}
        noIndex={seo?.fields?.noIndex}
      />
      <main className={styles.main}>
        <Header title={title} slug={slug} />
        <Hero data={hero} />
        <Sections data={sections} />
        <Link href="/">
          <a className={styles.card}>Home Page</a>
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getPage({
    pageContentType: "mainPage",
    slug: "contact",
  });
  const r = data.items[0];
  return {
    // Alwasy Return The Requied Data Otherwise the JSON Payload will be huge
    props: {
      seo: r.fields?.seo || null,
      hero: r?.fields?.hero || null,
      sections: r?.fields?.sections || null,
      title: r?.fields?.internalTitle,
      slug: r?.fields?.slug,
    }, // will be passed to the page component as props
  };
}
