import { FiFacebook, FiFileText, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

type ContactList = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

const contactList: ContactList[] = [
  {
    name: 'email',
    url: '#',
    icon: <FiMail />
  },
  {
    name: 'github',
    url: 'https://github.com/up2dul',
    icon: <FiGithub />
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/abdulmalikk',
    icon: <FiLinkedin />
  },
  {
    name: 'facebook',
    url: 'https://facebook.com/up2dul',
    icon: <FiFacebook />
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/unrspgt',
    icon: <FiInstagram />
  },
  {
    name: 'cv',
    url: '#',
    icon: <FiFileText />
  }
];

export { contactList };
