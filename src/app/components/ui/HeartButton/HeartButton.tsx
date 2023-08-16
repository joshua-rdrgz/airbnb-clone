'use client';

import useFavorite from '@hooks/useFavorite';
import { SafeUser } from '@/types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Modal } from '@/app/components/ui/Modal';
import { NotLoggedInModalWindow } from '../Modal/GuestModal/NotLoggedInModalWindow';

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

export const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <Modal condition={!currentUser}>
      <Modal.Open opens='login_modal' conditionNotMetOnClick={toggleFavorite}>
        <div className='relative hover:opacity-80 transition cursor-pointer'>
          <AiOutlineHeart
            size={28}
            className='fill-white absolute -top-[2px] -right-[2px]'
          />
          <AiFillHeart
            size={24}
            className={hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}
          />
        </div>
      </Modal.Open>
      <NotLoggedInModalWindow />
    </Modal>
  );
};
