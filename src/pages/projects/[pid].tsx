import Image from 'next/image';
import { Client } from '@notionhq/client';
import { FiGithub, FiGlobe } from 'react-icons/fi';
import type { GetStaticPaths, GetStaticProps } from 'next';

import { Layout } from '@/components';
import type { Page } from '@/types/notion';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId: string = process.env.NOTION_DB_ID as string;

const ProjectDetail = ({ projectDetail: { cover, properties } }: { projectDetail: Page }) => (
  <Layout title={properties.title.title[0].plain_text}>
    <h1>{properties.title.title[0].plain_text}</h1>

    <div className='mt-6 mb-14 flex flex-col items-center gap-5'>
      <div className='bg-gradient-to-br from-primary to-secondary p-1'>
        <Image
          src={cover?.file.url}
          alt={properties.title.title[0].plain_text}
          width={440}
          height={220}
        />
      </div>

      <ul className='flex flex-wrap justify-center gap-5'>
        {properties.tags.multi_select.map((tag) => (
          <li key={tag.id} className='tag'>
            {tag.name}
          </li>
        ))}
      </ul>

      <div className='font-4xl flex justify-center gap-10'>
        <a
          href={properties.demo_link.url}
          target='_blank'
          className='text-link cursor-alias text-sm md:text-base'
          rel='noreferrer'
        >
          <FiGlobe className='mb-1 inline' /> Demo site
        </a>
        <a
          href={properties.repo_link.url}
          target='_blank'
          className='text-link cursor-alias text-sm md:text-base'
          rel='noreferrer'
        >
          <FiGithub className='mb-1 inline' /> Github repository
        </a>
      </div>
    </div>

    <div className='mb-14 text-left'>
      <h2>
        📄 Project <span className='text-gradient'>description</span>
      </h2>
      <p className='mt-5'>
        My practice about creating multi step form with React Hook Form and Yup as validation. This
        website takes a case study of Bootcamp.
      </p>
    </div>

    <div className='mb-14 text-left'>
      <h2>
        🎯 Project <span className='text-gradient'>goals</span>
      </h2>
      <p className='mt-5'>
        My practice about creating multi step form with React Hook Form and Yup as validation. This
        website takes a case study of Bootcamp.
      </p>
    </div>

    <div className='text-left'>
      <h2>
        📝 <span className='text-gradient'>New things</span> I&apos;ve learned from building this
        project
      </h2>
      <p className='mt-5'>
        My practice about creating multi step form with React Hook Form and Yup as validation. This
        website takes a case study of Bootcamp.
      </p>
    </div>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'order',
        direction: 'descending',
      },
    ],
  });

  const paths = results.map((result) => ({
    params: { pid: result.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await notion.pages.retrieve({
    page_id: params?.pid as string,
  });

  return {
    props: {
      projectDetail: response,
    },
    revalidate: 20,
  };
};

export default ProjectDetail;
