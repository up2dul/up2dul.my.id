import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang='en'>
    <Head>
      <meta name='msapplication-TileColor' content='#965de9' />
      <meta name='theme-color' content='#f2f2f2' />
      <meta name='author' content='Abdul malik (up2dul)' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#965de9' />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
