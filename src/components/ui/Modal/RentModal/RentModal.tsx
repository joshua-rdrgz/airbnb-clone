'use client';

import { Heading } from '@ui/Heading';
import { AirbnbYourHomeForm } from './AirbnbYourHomeForm';

export const RentModal = () => {
  return (
    <>
      <div className='relative p-6 flex-auto'>
        <div className='flex flex-col gap-4'>
          <Heading>
            <Heading.Title>
              Which of these best describes your place?
            </Heading.Title>
            <Heading.Subtitle>Pick a category</Heading.Subtitle>
            <AirbnbYourHomeForm />
          </Heading>
        </div>
      </div>
    </>
  );
};
