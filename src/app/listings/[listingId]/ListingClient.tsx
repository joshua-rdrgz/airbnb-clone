'use client';

import { categoriesList } from '@ui/Navbar/Categories';
import { SafeListing, SafeUser } from '@/types';
import { Reservation } from '@prisma/client';
import { useMemo } from 'react';
import { Container } from '@ui/Container';
import { ListingHead } from '@ui/ListingHead';
import { ListingInfo } from '@ui/ListingInfo.tsx';

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser: SafeUser | null;
}

export const ListingClient: React.FC<ListingClientProps> = ({
  reservations,
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categoriesList.find(
      (category) => category.label === listing.category
    );
  }, [listing.category]);
  return (
    <Container>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col gap-6'>
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
