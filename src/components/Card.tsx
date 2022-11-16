import Link from 'next/link';

type CardProps = {
  href: string;
  order: number;
  title: string;
  description: string;
  technologies: string[];
};

const Card = ({ href, order, title, description, technologies }: CardProps) => (
  <Link href={href} className='card'>
    <article className='flex h-full flex-col justify-between gap-5 rounded-sm bg-light p-6 text-left dark:bg-dark'>
      <div className='flex items-start gap-2'>
        <p>0{order}</p>
        <h2>{title}</h2>
      </div>

      <p>{description}</p>

      <div className='flex flex-wrap gap-x-3 gap-y-2'>
        {technologies.map((tech, idx) => (
          <p key={idx} className='tag'>
            {tech}
          </p>
        ))}
      </div>
    </article>
  </Link>
);

export default Card;
