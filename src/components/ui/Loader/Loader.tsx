'use client';

import { PuffLoader } from 'react-spinners';

interface LoaderProps {
  size: number;
  height?: 'small' | 'large';
}

export const Loader: React.FC<LoaderProps> = ({ size, height = 'large' }) => {
  return (
    <div
      className={`
      ${height === 'large' ? 'h-[70vh]' : 'h-[35vh]'}
      flex 
      flex-col 
      justify-center 
      items-center 
    `}
    >
      <PuffLoader size={size} color='red' />
    </div>
  );
};
