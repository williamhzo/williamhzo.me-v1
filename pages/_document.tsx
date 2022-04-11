import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400&family=Lusitana&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body className="mx-auto my-0 flex max-w-[70ch] flex-col bg-background px-8 text-contrast lg:px-8">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
