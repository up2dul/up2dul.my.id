import { FiFacebook, FiFileText, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

type ContactList = {
  title: string;
  url: string;
  icon: React.ReactNode;
};

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

export { contactList };
