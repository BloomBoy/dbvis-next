// Contentful
import { getPage } from "contentful/index.js";

// Components
import Seo from "components/Seo";
import Sections from "components/Section/Section";
import Hero from "components/Hero";

export default function Home({ seo, hero, title, sections }) {
  return (
    <>
      <Seo
        title={seo?.fields?.title}
        description={seo?.fields?.description}
        noFollow={seo?.fields?.noFollow}
        noIndex={seo?.fields?.noIndex}
      />
      
      <Hero data={hero} />
      
      <Sections data={sections} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getPage({
    pageContentType: "mainPage",
    slug: "index",
  });
  const r = data.items[0];
  return {
    // Alwasy Return The Requied Data Otherwise the JSON Payload will be huge
    props: {
      seo: r.fields?.seo || null,
      hero: r?.fields?.hero || null,
      sections: r?.fields?.sections || null,
      title: r?.fields?.internalTitle,
      // slug: r?.fields?.slug,
    }, // will be passed to the page component as props
  };
}
