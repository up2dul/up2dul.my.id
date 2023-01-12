import { Layout } from '@/components';

const About = () => (
  <Layout title='About me' description='Get to know more about me'>
    <h1>
      👨‍💻 About <span className='text-gradient'>me</span>
    </h1>

    <div className='mb-14 text-left'>
      <h2>
        💬 Short story about <span className='text-gradient'>me</span>
      </h2>

      <p className='mt-5'>
        Hello, my name is Abdul malik, and my internet name is up2dul. I&apos;m a 20 y.o man from
        Jakarta, Indonesia. I&apos;ve been interested and passionate in programming since 2019,
        precisely when I was in high school. What made me interested was when I saw the chatbot on
        the LINE application, and then I&apos;m exploring how to make it on the internet, in the
        end, I did it (yeah even mine was a very simple chatbot). After that, I focus diving into
        web programming then.
      </p>

      <br />

      <p>
        Unfortunately, I had limited time to continue learning programming in 2021 due to my work
        commitments, which are not in the programming field. But, alhamdulillah, I&apos;m able to
        return to learning programming again in 2022. Currently, I&apos;m focusing on learning
        React.js and Typescript languages.
      </p>
    </div>

    <div className='mb-14 text-left'>
      <h2>
        🧩 What <span className='text-gradient'>things</span> I do now
      </h2>
      <p className='mt-5'>
        I&apos;m currently focusing on expanding my knowledge and skills in React.js, Next.js,
        Typescript, and related Frontend technologies by learning from official documentation,
        articles, videos on YouTube, as well as online courses. I also practice by creating and
        working on various projects and apps.
      </p>
    </div>

    <div className='text-left'>
      <h2>
        💡 Fun <span className='text-gradient'>facts</span>
      </h2>
      <p className='mt-5'>
        Apart from programming, one of the things I enjoy is reading books (even though I may not be
        as consistent with it currently). My reading preference mostly lies in novels, specifically
        those written by Tere Liye. These books by Tere Liye are truly fantastic and always leave me
        wanting to purchase more of his books.
      </p>
    </div>
  </Layout>
);

export default About;
