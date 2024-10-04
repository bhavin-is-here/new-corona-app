import React from "react";
import Head from "next/head";
import defaultCover from "../../../public/images/cover.png"; // Ensure this resolves correctly

function Seo({
  description = "",
  lang = "en",
  meta = [],
  title = "Tracking Coronavirus COVID-19",
  image = defaultCover,
}) {
  const defaultDescription =
    "Near real-time visualization based on data from the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University and DXY, using HERE Javascript API and HERE Data Hub APIs.";
  const metaDescription = description || defaultDescription;
  const metaTitle = title.trim(); // Trim spaces from title
  const metaImage = `https://developer.here.com${image}`; // Ensure this resolves correctly

  return (
    <Head>
      <title>{metaTitle}</title>

      {/* Meta tags */}
      <meta name="url" content="https://developer.here.com/coronavirus" />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImage} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@heredev" />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      {/* Uncomment and adjust if you need a favicon */}
      {/* <link rel="icon" href="/images/cover.png" /> */}

      {/* Additional meta tags passed through props */}
      {meta.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}

      <link href="https://developer.here.com/coronavirus" rel="canonical" />
    </Head>
  );
}

export default Seo;
