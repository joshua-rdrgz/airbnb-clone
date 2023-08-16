'use client';

import { useEffect } from 'react';
import { useCurrentUserStore } from '@hooks/useCurrentUserStore';
import { SafeUser } from '@/types';
import { Container } from '@/app/components/ui/Container';
import { Logo } from '@/app/components/ui/Navbar/Logo';
import { Search } from '@/app/components/ui/Navbar/Search';
import { UserMenu } from '@/app/components/ui/Navbar/UserMenu';
import { Categories } from '@/app/components/ui/Navbar/Categories';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const { setCurrentUser } = useCurrentUserStore();

  useEffect(() => {
    setCurrentUser(currentUser as SafeUser);
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
      <Categories />
    </div>
  );
};
