import { Modal } from '@ui/Modal';
import { LoginModal } from '@ui/Modal/GuestModal/LoginModal';
import { RegisterModal } from '@ui/Modal/GuestModal/RegisterModal';

export const AirbnbYourHome = () => {
  return (
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

      <Modal.Window name='sign_up_modal'>
        <Modal.Heading>Register</Modal.Heading>
        <RegisterModal />
      </Modal.Window>
    </Modal>
  );
};
