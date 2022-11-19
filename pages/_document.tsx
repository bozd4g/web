import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="follow, index" />

          <link href="/favicon/site.webmanifest" rel="manifest" />
          <link
            href="/favicon/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicon/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#fff"
            href="/favicon/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <meta content="#fff" name="theme-color" />
          <meta content="#fff" name="msapplication-TileColor" />
        </Head>

        <body className="flex h-full flex-col bg-zinc-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;