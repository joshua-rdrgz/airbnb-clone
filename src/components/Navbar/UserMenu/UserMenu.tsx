'use client';

import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Avatar } from '@components/Avatar';

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((boolean) => !boolean);
  }, []);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => {}}
          className='hidden text-sm font-semibold py-3 px-4 rounded-full transition cursor-pointer md:block hover:bg-neutral-100'
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className='p-4 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer transition md:py-1 md:px-2 hover:shadow-md'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};
