import Head from 'next/head';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google Clone</title>
        <meta name='description' content='Google search clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <header className='flex w-full p-5 justify-between text-md text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        <div className='flex space-x-4 items-center'>
          <p className='link'>Почта</p>
          <p className='link'>Изображения</p>
          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          <Avatar
            url={
              'https://cdn.dribbble.com/users/35810/screenshots/12863854/media/a47d93251876a69537c3ae3ac0122a6c.jpg?compress=1&resize=1200x900&vertical=top'
            }
          />
        </div>
      </header>
      {/* Body */}
      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png'
          height={100}
          width={300}
          alt='Google search logo'
        />

        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full  px-5 py-3 items-center border border-gray-200 sm:max-w-xl lg:max-w-2xl transition:all duration-150'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input
            ref={searchInputRef}
            type='text'
            className='focus:outline-none flex-grow'
          />
          <MicrophoneIcon className='h-5 ' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>
            Поиск в Google
          </button>
          <button onClick={search} className='btn'>
            Мне повезёт
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
