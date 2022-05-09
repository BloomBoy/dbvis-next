// Contentful
import { getPage } from "contentful/index.js";
// Components
import Seo from "components/Seo";
import Hero from "components/Hero";
import Sections from "components/Section/Section";

export default function Contact({ seo, title, hero, sections }) {
  return (
    <>
      <Seo
        title={seo?.fields?.title}
        description={seo?.fields?.description}
        noFollow={seo?.fields?.noFollow}
        noIndex={seo?.fields?.noIndex}
      />
      <div className="text-center h-screen">
        <h2 className="text-3xl">{title}</h2>
        <Hero data={hero} />
      </div>
      <Sections data={sections} />
    </>
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
      // slug: r?.fields?.slug,
    }, // will be passed to the page component as props
  };
}
