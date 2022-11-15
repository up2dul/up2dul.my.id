import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { getTime } from '@/utils/helpers';
import ButtonTheme from './ButtonTheme';
import NavMenu from './NavMenu';

const Navbar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isMenuShow, setIsMenuShow] = useState<boolean>(false);
  const currentTime: string = getTime();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <nav className='px-container fixed top-0 flex w-full flex-col items-center justify-between gap-4 py-3 backdrop-blur-md dark:bg-dark/10 sm:flex-row sm:py-4'>
        <h3>{currentTime} (UTC +07:00)</h3>

        <div className='flex w-full items-center justify-evenly gap-14 text-3xl sm:w-auto'>
          <ButtonTheme />

          <button onClick={() => setIsMenuShow(true)}>
            <FiMenu />
          </button>
        </div>
      </nav>

      {isMenuShow && <NavMenu onCloseClick={() => setIsMenuShow(false)} />}
    </>
  );
};

export default Navbar;
