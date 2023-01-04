import { FiFacebook, FiFileText, FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

import type { ContactList, NavLinkList } from '@/types';

const contactList: ContactList[] = [
  {
    title: 'Email <up2dul@gmail.com>',
    url: 'mailto:up2dul@gmail.com',
    icon: FiMail,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/up2dul',
    icon: FiGithub,
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/abdulmalikk',
    icon: FiLinkedin,
  },
  {
    title: 'Telegram',
    url: 'https://t.me/up2dul',
    icon: FiSend,
  },
  {
    title: 'Facebook',
    url: 'https://facebook.com/up2dul',
    icon: FiFacebook,
  },
  {
    title: 'My resume',
    url: 'https://drive.google.com/file/d/1656fAebP8o_onv5S-s5Calm0KbdxE1Mb/view?usp=sharing',
    icon: FiFileText,
  },
];

const navLinkList: NavLinkList[] = [
  {
    href: '/',
    title: 'Home',
    isActive: false,
  },
  {
    href: '/blog',
    title: 'Blog',
    isActive: false,
  },
  {
    href: '/projects',
    title: 'Projects',
    isActive: false,
  },
  {
    href: '/about',
    title: 'About me',
    isActive: false,
  },
  {
    href: '/about-site',
    title: 'About site',
    isActive: false,
  },
];

export { contactList, navLinkList };
