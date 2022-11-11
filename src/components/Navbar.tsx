import { useTheme } from 'next-themes';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';

import { getTime } from '@/utils/misc';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTime: string = getTime();
  const toggleTheme = (): void => (theme === 'dark' ? setTheme('light') : setTheme('dark'));

  return (
    <nav className='px-container flex w-full flex-col items-center justify-between gap-4 py-7 sm:flex-row'>
      <h3>{currentTime} (UTC +07:00)</h3>

      <div className='flex items-center gap-14 text-3xl'>
        <button onClick={toggleTheme}>{theme === 'dark' ? <FiSun /> : <FiMoon />}</button>

        <button>
          <FiMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
