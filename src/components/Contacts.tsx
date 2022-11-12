import { contactList } from '@/utils/misc';

const Contacts = () => {
  return (
    <div className='flex gap-8 text-2xl'>
      {contactList.map(({ name, url, icon }) => (
        <a key={name} href={url}>
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Contacts;
