import { useRouter } from 'next/router';
import { FiAlertCircle, FiX } from 'react-icons/fi';

import { useEscPress } from '@/utils/hooks';
import { navLinkList } from '@/utils/misc';
import NavLink from './NavLink';
import Tooltip from './Tooltip';

const NavMenu = ({ onCloseClick }: { onCloseClick: () => void }) => {
  const { pathname } = useRouter();

  const handleEscClick = useEscPress(onCloseClick);

  return (
    <aside
      className='fixed top-0 z-40 flex h-screen w-full items-center justify-center backdrop-blur-md'
      onKeyDown={handleEscClick}
    >
      <Tooltip content='Close'>
        <button
          className='absolute right-6 top-8 text-5xl sm:right-20 md:right-40 lg:right-56 xl:right-72'
          onClick={onCloseClick}
        >
          <FiX />
        </button>
      </Tooltip>

      <ul className='text-center'>
        {navLinkList.map(({ title, href }) => (
          <NavLink key={href} href={href} title={title} isActive={href === pathname} />
        ))}
      </ul>

      <div className='absolute bottom-8 flex items-center gap-2'>
        <FiAlertCircle />
        <p>You can use esc to close this</p>
      </div>
    </aside>
  );
};

export default NavMenu;
