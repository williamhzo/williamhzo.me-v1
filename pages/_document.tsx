import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lusitana&display=optional"
            rel="stylesheet"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/inter/inter.woff2"
            rel="preload"
            type="font/woff2"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
