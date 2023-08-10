import { getCurrentUser } from '@/actions/getCurrentUser';
import getListingById from '@/actions/getListingById';
import { EmptyState } from '@ui/EmptyState';
import { ListingClient } from './ListingClient';
import getReservations from '@/actions/getReservations';

interface IParams {
  listingId?: string;
}

export default async function ListingPage({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) return <EmptyState />;

  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  );
}
