import { getCurrentUser } from '@/actions/getCurrentUser';
import getFavoriteListings from '@/actions/getFavoriteListings';
import { EmptyState } from '@/app/components/ui/EmptyState';
import { FavoritesClient } from './FavoritesClient';

export default async function FavoritesPage() {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0)
    return (
      <EmptyState
        title='No favorites found'
        subtitle='Looks like you have no favorite listings.'
      />
    );

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
}
