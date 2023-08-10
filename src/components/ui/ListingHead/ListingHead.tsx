'use client';

import { useCountries } from '@hooks/useCountries';
import { SafeUser } from '@/types';
import { Heading } from '../Heading';
import Image from 'next/image';
import { HeartButton } from '../HeartButton';

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

export const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  const locationString = `${location?.region}, ${location?.label}`;

  return (
    <>
      <Heading>
        <Heading.Title>{title}</Heading.Title>
        <Heading.Subtitle>{locationString}</Heading.Subtitle>
      </Heading>
      <div className='w-full h-[60vh] overflow-hidden rounded-xl relative'>
        <Image alt='Image' src={imageSrc} fill className='object-fill w-full' />
        <div className='absolute top-5 right-5'>
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};
