'use client';

import useFavorite from '@hooks/useFavorite';
import { SafeUser } from '@/types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Modal } from '@ui/Modal';
import { LoginModal } from '../Modal/GuestModal/LoginModal';
import { RegisterModal } from '../Modal/GuestModal/RegisterModal';

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

      <Modal.Window name='login_modal'>
        <Modal.Heading>Log in</Modal.Heading>
        <LoginModal />
      </Modal.Window>

      <Modal.Window name='sign_up_modal'>
        <Modal.Heading>Sign up</Modal.Heading>
        <RegisterModal />
      </Modal.Window>
    </Modal>
  );
};
