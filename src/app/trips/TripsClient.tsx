'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { SafeReservation, SafeUser } from '@/types';
import { ListingCard } from '@ui/ListingCard';
import { CardGrid } from '@/components/ui/CardGrid';

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

export const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();

  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success('Reservation cancelled');
          router.refresh();
        })
        .catch((error) => toast.error(error?.response?.data?.error))
        .finally(() => setDeletingId(''));
    },
    [router]
  );

  return (
    <CardGrid
      title='Trips'
      subtitle="Where you've been and where you're going"
      data={reservations}
      render={(reservation) => (
        <ListingCard
          key={reservation.id}
          data={reservation.listing}
          reservation={reservation}
          actionId={reservation.id}
          onAction={onCancel}
          disabled={deletingId === reservation.id}
          actionLabel='Cancel reservation'
          currentUser={currentUser}
        />
      )}
    />
  );
};
