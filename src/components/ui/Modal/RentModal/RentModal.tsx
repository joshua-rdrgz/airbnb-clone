'use client';

import { AirbnbYourHomeForm } from './AirbnbYourHomeForm/AirbnbYourHomeForm';

export const RentModal = () => {
  return (
    <>
      <div className='relative p-6 flex-auto'>
        <div className='flex flex-col gap-8'>
          <AirbnbYourHomeForm />
        </div>
      </div>
    </>
  );
};
