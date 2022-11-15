import { FiFacebook, FiFileText, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

import type { ContactList, NavLinkList } from '@/types';

const contactList: ContactList[] = [
  {
    title: 'Email',
    url: '#',
    icon: <FiMail />
  },
  {
    title: 'Github',
    url: 'https://github.com/up2dul',
    icon: <FiGithub />
  },
  {
    title: 'Linkedin',
    url: 'https://linkedin.com/in/abdulmalikk',
    icon: <FiLinkedin />
  },
  {
    title: 'Facebook',
    url: 'https://facebook.com/up2dul',
    icon: <FiFacebook />
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/unrspgt',
    icon: <FiInstagram />
  },
  {
    title: 'My resume',
    url: 'https://drive.google.com/file/d/1OXdGnIF0wOT-jGBItMJ5QKpYQgFfatkI/view?usp=sharing',
    icon: <FiFileText />
  }
];

const navLinkList: NavLinkList[] = [
  {
    href: '/',
    title: 'Home',
    isActive: true
  },
  {
    href: '/blog',
    title: 'Blog',
    isActive: false
  },
  {
    href: '/projects',
    title: 'Projects',
    isActive: false
  },
  {
    href: '/about',
    title: 'About me',
    isActive: false
  },
  {
    href: '/about-site',
    title: 'About site',
    isActive: false
  },
  {
    href: '/my-uses',
    title: 'Uses',
    isActive: false
  }
];

export { contactList, navLinkList };
