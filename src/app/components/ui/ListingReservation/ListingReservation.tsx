'use client';

import { Range } from 'react-date-range';
import { SafeUser } from '@/types';
import { Calendar } from '@/app/components/ui/Calendar';
import { Button } from '@/app/components/ui/Button';
import { Modal } from '@/app/components/ui/Modal';
import { NotLoggedInModalWindow } from '../Modal/GuestModal/NotLoggedInModalWindow';

interface ListingReservationProps {
  price: number;
  totalPrice: number;
  onChangeDate(value: Range): void;
  dateRange: Range;
  onSubmit(): void;
  disabled: boolean;
  disabledDates: Date[];
  currentUser?: SafeUser | null;
}

export const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  totalPrice,
  onChangeDate,
  dateRange,
  onSubmit,
  disabled,
  disabledDates,
  currentUser,
}) => {
  return (
    <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
      <div className='flex flex-row items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {price}</div>
        <div className='font-light text-neutral-600'>night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className='p-4'>
        <Modal condition={!currentUser}>
          <Modal.Open opens='login_modal' conditionNotMetOnClick={onSubmit}>
            <Button disabled={disabled} label='Reserve' />
          </Modal.Open>
          <NotLoggedInModalWindow />
        </Modal>
      </div>
      <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};
