import { Contacts, Layout } from '@/components';

const Home = () => {
  return (
    <Layout>
      <h1>
        👋 Hi there <br /> I&apos;m <span className='text-gradient'>Abdul malik</span>!
      </h1>

      <Contacts />

      <p>
        Love to writing code and exploring about programming technologies, especially Frontend web
        technologies.
      </p>
    </Layout>
  );
};

export default Home;
