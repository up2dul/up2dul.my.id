import { contactList } from '@/utils/misc';
import Tooltip from './Tooltip';

const Contacts = () => (
  <div className='flex gap-8 text-2xl'>
    {contactList.map(({ title, url, icon }) => (
      <Tooltip key={title} content={title}>
        {title === 'Email' ? (
          <button className='cursor-pointer p-1 hover:text-purple'>{icon}</button>
        ) : (
          <a
            href={url}
            className='cursor-alias p-1 hover:text-purple'
            target={'_blank'}
            rel='noreferrer'
          >
            {icon}
          </a>
        )}
      </Tooltip>
    ))}
  </div>
);

export default Contacts;
