import { Layout, Card } from '@/components';

const Projects = () => {
  return (
    <Layout title='Projects' description='Some of my projects showcase'>
      <h1>
        🎨 My <span className='text-gradient'>projects</span>
      </h1>

      <p className='mt-5 text-base'>
        Some of my latest projects, currently there is only website project.
      </p>

      <div className='mt-14 grid w-full grid-cols-1 gap-12 lg:grid-cols-2'>
        <Card
          href='#'
          order={1}
          title='Bookshelf'
          description='Manage your reading list and your wishlist books'
          technologies={['Next js', 'Mantine UI', 'Typescript', 'Framer motion']}
        />
        <Card
          href='#'
          order={2}
          title='ToDo list'
          description='An app for your productivity, notes your activity'
          technologies={['Vite', 'Tailwindcss', 'Jotai']}
        />
        <Card
          href='#'
          order={3}
          title='ToDo list'
          description='An app for your productivity'
          technologies={['Vite', 'Tailwindcss', 'Jotai']}
        />
      </div>
    </Layout>
  );
};

export default Projects;
