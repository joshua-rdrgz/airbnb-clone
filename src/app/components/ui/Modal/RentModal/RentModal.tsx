'use client';

import { AirbnbYourHomeForm } from './AirbnbYourHomeForm/AirbnbYourHomeForm';

interface RentModalProps {
  /** Receives from Modal.Window */
  closeModal?(): Promise<void>;
}

export const RentModal = ({ closeModal }: RentModalProps) => {
  return (
    <>
      <div className='relative p-6 flex-auto'>
        <div className='flex flex-col gap-8'>
          <AirbnbYourHomeForm closeModal={closeModal} />
        </div>
      </div>
    </>
  );
};
