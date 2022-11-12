import { FiX } from 'react-icons/fi';

const NavMenu = ({ onCloseClick }: { onCloseClick: () => void }) => (
  <aside className='fixed top-0 z-10 flex h-screen w-full items-center justify-center bg-black/10 backdrop-blur-md'>
    <button
      className='absolute right-6 top-8 text-5xl sm:right-20 md:right-40 lg:right-56 xl:right-72'
      onClick={onCloseClick}
    >
      <FiX />
    </button>

    <ul className='text-center'>
      <li>
        <h1>Home</h1>
      </li>
      <li>
        <h1>About</h1>
      </li>
      <li>
        <h1>Projects</h1>
      </li>
    </ul>
  </aside>
);

export default NavMenu;
