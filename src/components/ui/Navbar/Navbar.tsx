'use client';

import { useEffect } from 'react';
import { useCurrentUserStore } from '@hooks/useCurrentUserStore';
import { Container } from '@ui/Container';
import { Logo } from '@ui/Navbar/Logo';
import { Search } from '@ui/Navbar/Search';
import { UserMenu } from '@ui/Navbar/UserMenu';
import { SafeUser } from '@/types';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const { setCurrentUser } = useCurrentUserStore();

  useEffect(() => {
    setCurrentUser(currentUser as User);
  }, [currentUser, setCurrentUser]);

  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};
