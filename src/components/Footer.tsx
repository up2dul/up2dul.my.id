const Footer = () => (
  <footer className='py-6 px-8 text-center sm:px-10 md:px-14 lg:px-20'>
    <div className='my-6 flex justify-between sm:my-4 md:my-0'>
      <p>Design & Code with 💙</p>
      <p>
        Code on{' '}
        <a
          href='https://github.com/up2dul/up2dul.my.id'
          target={'_blank'}
          className='text-link cursor-alias'
          rel='noreferrer'
        >
          Github
        </a>
      </p>
    </div>

    <div className='text-sm'>
      <p>⚠️ This site is still under development</p>
    </div>
  </footer>
);

export default Footer;
