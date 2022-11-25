import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { useEscPress } from '@/utils/hooks';
import { getTime } from '@/utils/helpers';
import ButtonTheme from './ButtonTheme';
import NavMenu from './NavMenu';

const Navbar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isMenuShow, setIsMenuShow] = useState<boolean>(false);
  const currentTime: string = getTime();

  useEffect(() => setMounted(true), []);

  const handleEscClick = useEscPress(() => setIsMenuShow(false));

  if (!mounted) return null;

  return (
    <>
      <nav className='navbar' onKeyDown={handleEscClick}>
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
