import Head from "next/head";
import React from "react";

export default function SEO() {
  return (
    <Head>
      <title>william | frontend engineer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="William Hermozo, Frontend Engineer, UI/UX and humans."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="William Hzo - Frontend Engineer" />
      <meta
        property="og:description"
        content="William Hzo - Frontend Engineer, UI/UX"
      />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://williamhzo.me/" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/flextance/image/upload/v1649709596/williamhzo.me/31082019-ELA02772_q8uwmp.jpg"
      />
      <meta name="theme-color" content="#151718" />
    </Head>
  );
}
