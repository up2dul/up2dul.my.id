import Link from 'next/link';

import { Layout } from '@/components';

const NotFound = () => (
  <Layout title='404 Page not found'>
    <h1 className='text-4xl sm:text-h1'>
      🧐 <span className='text-gradient'>404</span> - Looks like you&apos;re lost
    </h1>

    <p>
      Maybe this page used to exist or you just spelled something wrong. I&apos;m guessing you
      spelled something wrong. Can you double check that URL?
    </p>

    <Link href={'/'} className='text-link'>
      Back to Home page
    </Link>
  </Layout>
);

export default NotFound;
