import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const Layout = ({
  title = 'Home',
  description = 'My personal website, a website where I showcase some my projects, contacts, etc.',
  children
}: LayoutProps) => (
  <>
    <Head>
      <meta name='title' content={title + ` | up2dul's site`} />
      <meta name='description' content={description} />
      <title>{title + ` | up2dul's site`}</title>
    </Head>

    <Navbar />

    <main className='flex min-h-screen flex-col justify-between pt-[97px] sm:pt-[62px]'>
      <section className='px-container my-auto flex flex-col items-center justify-center gap-7 py-14 text-center'>
        {children}
      </section>

      <Footer />
    </main>
  </>
);

export default Layout;
