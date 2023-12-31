'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt='Airbnb Logo'
      className='hidden cursor-pointer md:block'
      height='100'
      width='100'
      src='/images/logo.png'
      onClick={() => router.push('/')}
    />
  );
};
