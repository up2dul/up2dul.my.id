import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import 'tippy.js/dist/tippy.css';

import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider defaultTheme='dark'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='msapplication-TileColor' content='#965de9' />
        <meta name='theme-color' content='#f2f2f2' />
        <meta name='author' content='Abdul malik (up2dul)' />
        <meta name='title' content="up2dul's site" />
        <meta
          name='description'
          content='My personal website, a website where I showcase some my projects, contacts, etc.'
        />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
