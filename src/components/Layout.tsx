import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const Layout = ({ title, description, children }: LayoutProps) => {
  const metaTitle = title ? title + ' | ' + "up2dul's site" : "up2dul's site";
  const metaDescription =
    description ||
    'My personal website, a website where I showcase some my projects, contacts, etc.';

  return (
    <>
      <Head>
        <meta name='title' content={metaTitle} />
        <meta name='description' content={metaDescription} />
        <title>{metaTitle}</title>
      </Head>

      <Navbar />

      <main className='px-container mt-[97px] flex flex-col items-center justify-center gap-7 py-24 text-center sm:mt-[62px]'>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
