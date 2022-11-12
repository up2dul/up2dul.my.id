import { contactList } from '@/utils/misc';
import Tooltip from './Tooltip';

const Contacts = () => (
  <div className='flex gap-8 text-2xl'>
    {contactList.map(({ name, url, icon }) => (
      <Tooltip key={name} content={name}>
        <a href={url} className='cursor-alias p-1 hover:text-purple'>
          {icon}
        </a>
      </Tooltip>
    ))}
  </div>
);

export default Contacts;
