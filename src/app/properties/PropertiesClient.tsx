'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { SafeListing, SafeUser } from '@/types';
import { ListingCard } from '@/app/components/ui/ListingCard';
import { CardGrid } from '@/app/components/ui/CardGrid';

interface PropertiesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

export const PropertiesClient: React.FC<PropertiesClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();

  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success('Listing deleted');
          router.refresh();
        })
        .catch((error) => toast.error(error?.response?.data?.error))
        .finally(() => setDeletingId(''));
    },
    [router]
  );

  return (
    <CardGrid
      title='Properties'
      subtitle='List of your properties'
      data={listings}
      render={(listing) => (
        <ListingCard
          key={listing.id}
          data={listing}
          actionId={listing.id}
          onAction={onCancel}
          disabled={deletingId === listing.id}
          actionLabel='Delete property'
          currentUser={currentUser}
        />
      )}
    />
  );
};
