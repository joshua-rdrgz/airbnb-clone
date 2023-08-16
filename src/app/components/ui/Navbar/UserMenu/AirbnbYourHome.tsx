'use client';

import { useCurrentUserStore } from '@hooks/useCurrentUserStore';
import { Modal } from '@/app/components/ui/Modal';
import { LoginModal } from '@/app/components/ui/Modal/GuestModal/LoginModal';
import { RegisterModal } from '@/app/components/ui/Modal/GuestModal/RegisterModal';
import { RentModal } from '@/app/components/ui/Modal/RentModal';

export const AirbnbYourHome = () => {
  const { currentUser } = useCurrentUserStore();

  return currentUser ? (
    <Modal>
      <Modal.Open opens='rent_modal'>
        <div className='hidden text-sm font-semibold py-3 px-4 rounded-full transition cursor-pointer md:block hover:bg-neutral-100'>
          Airbnb your home
        </div>
      </Modal.Open>
      <Modal.Window name='rent_modal'>
        <Modal.Heading>Airbnb your home!</Modal.Heading>
        <RentModal />
      </Modal.Window>
    </Modal>
  ) : (
    <Modal>
      <Modal.Open opens='login_modal'>
        <div className='hidden text-sm font-semibold py-3 px-4 rounded-full transition cursor-pointer md:block hover:bg-neutral-100'>
          Airbnb your home
        </div>
      </Modal.Open>
      <Modal.Window name='login_modal'>
        <Modal.Heading>LogIn</Modal.Heading>
        <LoginModal />
      </Modal.Window>

      {/* Must be present for toggling between RegisterModal and LoginModal */}
      <Modal.Window name='sign_up_modal'>
        <Modal.Heading>Register</Modal.Heading>
        <RegisterModal />
      </Modal.Window>
    </Modal>
  );
};
