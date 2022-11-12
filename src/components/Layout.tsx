import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      <main className='px-container mt-[86px] flex flex-col items-center justify-center gap-7 py-24'>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
