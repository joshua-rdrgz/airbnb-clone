'use client';

import { EmptyState } from '@/components/ui/EmptyState';
import { useEffect } from 'react';

interface ErrorStateProps {
  error: Error;
}

export default function ErrorState({ error }: ErrorStateProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title='Uh Oh' subtitle='Something went wrong!' />;
}
