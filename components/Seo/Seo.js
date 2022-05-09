import Head from "next/head";

function Seo({ title, description, noFollow, noIndex }) {
  return (
    <Head>
      <title>{title || "Default Title"}</title>
      <meta name="description" content={description || "Default Description"} />
      <link rel="icon" href="/favicon.ico" />
      {noFollow && (
        <>
          <meta key="robots" name="robots" content="nofollow" />
          <meta key="googlebot" name="googlebot" content="nofollow" />
        </>
      )}
      {noIndex && (
        <>
          <meta key="robots" name="robots" content="noindex" />
          <meta key="googlebot" name="googlebot" content="noindex" />
        </>
      )}
    </Head>
  );
}

export default Seo;
