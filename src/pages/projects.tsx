import { Layout } from '@/components';

const Projects = () => {
  return (
    <Layout title='Projects' description='Some of my projects showcase'>
      <div>
        <h1>
          🎨 My <span className='text-gradient'>projects</span>
        </h1>

        <p className='mt-5 text-base'>
          Some of my latest projects, currently there is only website project.
        </p>
      </div>
    </Layout>
  );
};

export default Projects;
