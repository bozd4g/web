import MetaConfig from "../lib/meta";

const Head = () => (
    <>
        <title>{`${MetaConfig.title} | ${MetaConfig.shortDescription.toLowerCase()}`}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta name="description" content={MetaConfig.description}/>
        <meta charSet="utf-8"/>
        <meta name="robots" content="follow, index"/>
        <meta content="#fff" name="theme-color"/>
        <meta content="#fff" name="msapplication-TileColor"/>

        <link href="/favicon/site.webmanifest" rel="manifest"/>
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
    </>
)

export default Head;