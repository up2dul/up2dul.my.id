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

    <a href={'#main-content'} className='skip-content'>
      Skip to content
    </a>

    <Navbar />

    <main className='flex min-h-screen flex-col justify-between pt-[97px] sm:pt-[62px]'>
      <section id='main-content' className='px-container my-auto py-14 text-center'>
        {children}
      </section>

      <Footer />
    </main>
  </>
);

export default Layout;
