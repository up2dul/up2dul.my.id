import Head from 'next/head';

import { Layout } from '@/components';

const About = () => {
  return (
    <>
      <Head>
        <title>About me | up2dul&apos;s site</title>
      </Head>

      <Layout>
        <h1>
          👨‍💻 About <span className='text-gradient'>me</span>
        </h1>
      </Layout>
    </>
  );
};

export default About;
