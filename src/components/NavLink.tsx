import Link from 'next/link';
import clsx from 'clsx';

import type { NavLinkList as NavLinkProps } from '@/types';

const NavLink = ({ href, title, isActive }: NavLinkProps) => (
  <li
    className={clsx(
      'text-3xl',
      isActive
        ? 'text-secondary'
        : 'decoration-secondary decoration-4 underline-offset-4 hover:text-secondary hover:underline',
    )}
  >
    {isActive ? title : <Link href={href}>{title}</Link>}
  </li>
);

export default NavLink;
