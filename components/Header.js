import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex items-center w-full p-6'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png'
          alt='Google logo'
          height={40}
          width={120}
          className='cursor-pointer'
          onClick={() => router.push('/')}
        />
        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl'>
          <input
            type='text'
            ref={searchInputRef}
            className='w-full flex-grow focus:outline-none'
          />
          <XIcon
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer' />
          <SearchIcon
            onClick={search}
            className='h-6 text-blue-500 hidden sm:inline-flex cursor-pointer'
          />
          <button hidden type='submit' onClick={search}>
            Поиск
          </button>
        </form>
        <Avatar
          url={
            'https://cdn.dribbble.com/users/35810/screenshots/12863854/media/a47d93251876a69537c3ae3ac0122a6c.jpg?compress=1&resize=1200x900&vertical=top'
          }
          className='ml-auto'
        />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
