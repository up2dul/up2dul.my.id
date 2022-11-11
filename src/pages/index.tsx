import Head from 'next/head';

import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <>
      <Head>
        <title>up2dul&apos;s site</title>
      </Head>

      <Navbar />

      <div className='px-container mt-5 flex flex-col items-center justify-center'>
        <h1 className='text-gradient'>Hello next js</h1>
        <p className='text-center'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.{' '}
          <span className='text-gradient'>Molestias</span> illo obcaecati fugiat quaerat impedit
          maxime tempora sequi quos. Illum, eos!
        </p>
        <h2 className='text-gradient'>Hello next js</h2>
        <h3 className='text-gradient'>Hello next js</h3>
      </div>
    </>
  );
};

export default Home;
