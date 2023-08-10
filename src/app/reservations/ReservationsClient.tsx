'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { SafeReservation, SafeUser } from '@/types';
import { Heading } from '@ui/Heading';
import { Container } from '@ui/Container';
import { ListingCard } from '@ui/ListingCard';

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
    <Container>
      <Heading>
        <Heading.Title>Reservations</Heading.Title>
        <Heading.Subtitle>Bookings on your properties</Heading.Subtitle>
      </Heading>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {reservations.map((reservation) => (
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
        ))}
      </div>
    </Container>
  );
};
