import { Partytown } from "@builder.io/partytown/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import MetaConfig from "../lib/meta";

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

          <Partytown
            debug={process.env.NODE_ENV !== "production"}
            forward={["dataLayer.push"]}
          />

          <script
            type="text/partytown"
            src={`https://www.googletagmanager.com/gtag/js?id=${MetaConfig.analytics}`}
            async
          />

          <script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){ dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', '${MetaConfig.analytics}');`,
            }}
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