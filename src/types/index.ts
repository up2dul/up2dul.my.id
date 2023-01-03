import type { IconType } from 'react-icons';

type ContactList = {
  title: string;
  url: string;
  icon: IconType;
};

type NavLinkList = {
  href: string;
  title: string;
  isActive: boolean;
};

export type { ContactList, NavLinkList };
