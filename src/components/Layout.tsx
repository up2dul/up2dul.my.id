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

      <main className='flex min-h-screen flex-col justify-between pt-[97px] sm:pt-[62px]'>
        <section className='px-container gap-7py-14 my-auto flex flex-col items-center justify-center text-center'>
          {children}
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Layout;
