'use client';

import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Avatar } from '@ui/Avatar';
import { MenuItem } from '@ui/Navbar/MenuItem';
import { Modal } from '@ui/Modal';
import { RegisterModal } from '@ui/Modal/RegisterModal';

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
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Modal>
              <Modal.Open opens='login_modal'>
                <MenuItem>Login</MenuItem>
              </Modal.Open>
              <Modal.Window name='login_modal'>
                <Modal.Heading>Login</Modal.Heading>
              </Modal.Window>

              <Modal.Open opens='sign_up_modal'>
                <MenuItem>Sign up</MenuItem>
              </Modal.Open>
              <Modal.Window name='sign_up_modal'>
                <Modal.Heading>Register</Modal.Heading>
                <RegisterModal />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};
