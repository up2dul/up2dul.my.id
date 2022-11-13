import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import 'tippy.js/dist/tippy.css';

import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider defaultTheme='dark'>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
