'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { SafeReservation, SafeUser } from '@/types';
import { ListingCard } from '@/app/components/ui/ListingCard';
import { CardGrid } from '@/app/components/ui/CardGrid';

interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

export const ReservationsClient: React.FC<ReservationsClientProps> = ({
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
          toast.success('Reservation cancelled!');
          router.refresh();
        })
        .catch(() => toast.error('Something went wrong.'))
        .finally(() => setDeletingId(''));
    },
    [router]
  );

  return (
    <CardGrid
      title='Reservations'
      subtitle='Bookings on your properties'
      data={reservations}
      render={(reservation) => (
        <ListingCard
          key={reservation.id}
          data={reservation.listing}
          reservation={reservation}
          actionId={reservation.id}
          onAction={onCancel}
          disabled={deletingId === reservation.id}
          actionLabel='Cancel guest reservation'
          currentUser={currentUser}
        />
      )}
    />
  );
};
