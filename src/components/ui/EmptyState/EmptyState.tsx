'use client';

import { useRouter } from 'next/navigation';
import { Heading } from '@ui/Heading';
import { Button } from '@ui/Button';
import { toast } from 'react-hot-toast';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters',
  showReset,
}) => {
  const router = useRouter();
  return (
    <div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
      <Heading center>
        <Heading.Title>{title}</Heading.Title>
        <Heading.Subtitle>{subtitle}</Heading.Subtitle>
      </Heading>
      <div className='w-48 mt-4'>
        {showReset && (
          <Button
            intent='secondary'
            onClick={() => {
              router.push('/');
              toast.success('Filters removed!');
            }}
            label='Remove all filters'
          />
        )}
      </div>
    </div>
  );
};
