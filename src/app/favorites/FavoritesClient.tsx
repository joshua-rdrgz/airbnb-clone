'use client';

import { CardGrid } from '@/components/ui/CardGrid';
import { ListingCard } from '@/components/ui/ListingCard';
import { SafeListing, SafeUser } from '@/types';

interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

export const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <CardGrid
      title='Favorites'
      subtitle='List of places you have favorited!'
      data={listings}
      render={(listing) => (
        <ListingCard
          key={listing.id}
          currentUser={currentUser}
          data={listing}
        />
      )}
    />
  );
};
