import Head from 'next/head';

import { Contacts, Layout } from '@/components';

const Home = () => {
  return (
    <>
      <Head>
        <title>up2dul&apos;s site</title>
      </Head>

      <Layout>
        <h1 className='text-center'>
          👋 Hi there <br /> I&apos;m <span className='text-gradient'>Abdul malik</span>!
        </h1>

        <Contacts />

        <p className='text-center'>
          Love to writing code and exploring about programming technologies, especially Frontend web
          technologies.
        </p>
      </Layout>
    </>
  );
};

export default Home;
