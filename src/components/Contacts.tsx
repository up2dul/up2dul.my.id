import { contactList } from '@/utils/misc';
import Tooltip from './Tooltip';

const Contacts = () => (
  <div className='flex justify-center gap-6 text-2xl sm:gap-8'>
    {contactList.map((contact) => (
      <Tooltip key={contact.title} content={contact.title}>
        <a
          href={contact.url}
          className='cursor-alias p-1 hover:text-primary'
          target={'_blank'}
          rel='noreferrer'
        >
          {<contact.icon />}
        </a>
      </Tooltip>
    ))}
  </div>
);

export default Contacts;
