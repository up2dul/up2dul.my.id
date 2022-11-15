import { contactList } from '@/utils/misc';
import Tooltip from './Tooltip';

const Contacts = () => (
  <div className='flex justify-center gap-6 text-2xl sm:gap-8'>
    {contactList.map(({ title, url, icon }) => (
      <Tooltip key={title} content={title}>
        <a
          href={url}
          className='cursor-alias p-1 hover:text-primary'
          target={'_blank'}
          rel='noreferrer'
        >
          {icon}
        </a>
      </Tooltip>
    ))}
  </div>
);

export default Contacts;
