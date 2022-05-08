/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Layout from '../components/layout'

// Components
import { getPage } from "contentful/index.js";

export default function Home({ data }) {
  return (
    
    <div className="">
  
      <main className="">

        <div className="text-center h-screen">

          <h1 className="">
            {data.fields?.hero?.fields?.mainHeader}
          </h1>

          <h3>
            {data.fields?.hero?.fields?.subHeader}
          </h3>

          {data?.fields?.hero?.fields?.buttons?.map((button) => (
            <a href={button.fields?.link} 
               className={'btn--primary ' + button.fields?.size + ' ' + button.fields?.color} key={button?.sys?.id}>
              {button.fields?.buttonText}
            </a>
          ))}

          <img
            src={data.fields?.hero?.fields?.image?.fields?.imageFile?.fields?.file?.url}
            alt={data.fields?.hero?.fields?.image?.fields?.alt}
            loading="lazy"
          />
        </div>

        <div className="">
          {data?.fields?.sections?.map((section) => (
            <a className="" key={section?.sys?.id}>
              <h2>{section.fields?.sectionName} &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          ))}
        </div>
      </main>
    </div>
    
  );
}
 
export async function getStaticProps() {
  const data = await getPage({
    pageContentType: "mainPage",
    slug: "index",
  });
  return {
    // Alwasy Return The Requied Data Otherwise the JSON Payload will be huge 
    props: { data: data.items[0] }, // will be passed to the page component as props
  };
}
