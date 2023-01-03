import { Client } from '@notionhq/client';
import type { GetStaticProps } from 'next';

import { Layout, Card } from '@/components';
import type { Page } from '@/types/notion';

const Projects = ({ projects }: { projects: Page[] }) => {
  return (
    <Layout title='Projects' description='Some of my featured projects'>
      <h1>
        🎨 My <span className='text-gradient'>projects</span>
      </h1>

      <p className='mt-5 text-base'>
        Some of my featured projects, currently there is only website project.
      </p>

      <div className='mt-14 grid w-full grid-cols-1 gap-12 lg:grid-cols-2'>
        {projects.map(({ id, properties }, idx) => (
          <Card
            key={id}
            href='#'
            order={'0' + (idx + 1)}
            title={properties?.title?.title[0]?.plain_text}
            description={properties?.short_description?.rich_text[0]?.text?.content}
            technologies={properties?.tags?.multi_select?.map((tag) => tag.name)}
          />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId: string = process.env.NOTION_DB_ID as string;

  const { results } = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'order',
        direction: 'descending',
      },
    ],
  });

  return {
    props: {
      projects: results,
    },
    revalidate: 20,
  };
};

export default Projects;
