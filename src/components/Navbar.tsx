import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

import { getTime } from '@/utils/helpers';

const Navbar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isMenuShow, setIsMenuShow] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const currentTime: string = getTime();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = (): void => (theme === 'dark' ? setTheme('light') : setTheme('dark'));

  return (
    <>
      <nav className='px-container fixed top-0 flex w-full flex-col items-center justify-between gap-4 py-7 backdrop-blur-md dark:bg-black/10 sm:flex-row'>
        <h3>{currentTime} (UTC +07:00)</h3>

        <div className='flex items-center gap-14 text-3xl'>
          <button onClick={toggleTheme}>{theme === 'dark' ? <FiSun /> : <FiMoon />}</button>

          <button onClick={() => setIsMenuShow(true)}>
            <FiMenu />
          </button>
        </div>
      </nav>

      {isMenuShow && (
        <aside className='fixed top-0 z-10 flex h-screen w-full items-center justify-center bg-black/10 backdrop-blur-md'>
          <button
            className='absolute right-6 top-8 text-5xl sm:right-20 md:right-40 lg:right-56 xl:right-72'
            onClick={() => setIsMenuShow(false)}>
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
      )}
    </>
  );
};

export default Navbar;
