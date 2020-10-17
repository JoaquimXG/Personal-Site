// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at https://react-static.js.org

export default {
    maxThreads: 1, // Remove this when you start doing any static generation

    plugins: ["react-static-plugin-styled-components"],

    Document: ({
        Html,
        Head,
        Body,
        children,
        state: { siteData, renderMeta }
    }) => (
        <Html lang="en-US">
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Body>{children}</Body>
        </Html>
    )
};
