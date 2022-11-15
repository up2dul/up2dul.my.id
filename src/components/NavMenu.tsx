import Link from 'next/link';
import { FiX } from 'react-icons/fi';

import Tooltip from './Tooltip';

const NavMenu = ({ onCloseClick }: { onCloseClick: () => void }) => (
  <aside className='fixed top-0 z-10 flex h-screen w-full items-center justify-center bg-dark/10 backdrop-blur-md'>
    <Tooltip content='Close'>
      <button
        className='absolute right-6 top-8 text-5xl sm:right-20 md:right-40 lg:right-56 xl:right-72'
        onClick={onCloseClick}
      >
        <FiX />
      </button>
    </Tooltip>

    <ul className='text-center'>
      <li className='text-h1 decoration-secondary decoration-4 underline-offset-4 hover:text-secondary hover:underline'>
        <Link href={'/'}>Home</Link>
      </li>

      <li className='text-h1 decoration-secondary decoration-4 underline-offset-4 hover:text-secondary hover:underline'>
        <Link href={'/projects'}>Projects</Link>
      </li>

      <li className='text-h1 decoration-secondary decoration-4 underline-offset-4 hover:text-secondary hover:underline'>
        <Link href={'/about'}>About me</Link>
      </li>
    </ul>
  </aside>
);

export default NavMenu;
