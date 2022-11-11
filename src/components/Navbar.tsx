import { FiMenu, FiSun } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className='px-container flex w-full flex-col items-center justify-between gap-4 bg-black py-7 sm:flex-row'>
      <h3>15:31 (UTC +07:00)</h3>

      <div className='flex items-center gap-14'>
        <button>
          <FiSun className='text-3xl' />
        </button>

        <button>
          <FiMenu className='text-3xl' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
