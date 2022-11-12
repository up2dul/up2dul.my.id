import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      <main className='px-container mt-[97px] flex flex-col items-center justify-center gap-7 py-24 sm:mt-[62px]'>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
