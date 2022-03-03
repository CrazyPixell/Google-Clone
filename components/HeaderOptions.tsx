import HeaderOptionSingle from './HeaderOptionSingle';
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from '@heroicons/react/outline';

interface HeaderOptionsProprs {}

const HeaderOptions: React.FC<HeaderOptionsProprs> = (): React.ReactElement => {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b'>
      <div className='flex space-x-6'>
        <HeaderOptionSingle Icon={SearchIcon} title={'Все'} selected />
        <HeaderOptionSingle Icon={PhotographIcon} title={'Картинки'} />
        <HeaderOptionSingle Icon={PlayIcon} title={'Видео'} />
        <HeaderOptionSingle Icon={MapIcon} title={'Карты'} />
        <HeaderOptionSingle Icon={NewspaperIcon} title={'Новости'} />
        <HeaderOptionSingle Icon={DotsVerticalIcon} title={'Ещё'} />
      </div>

      <div className='flex space-x-4'>
        <p className='link'>Настройки</p>
        <p className='link'>Инструменты</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
