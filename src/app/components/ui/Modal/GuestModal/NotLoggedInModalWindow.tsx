import { Modal } from '@/app/components/ui/Modal';
import { LoginModal } from './LoginModal';
import { RegisterModal } from './RegisterModal';

export const NotLoggedInModalWindow = () => {
  return (
    <>
      <Modal.Window name='login_modal'>
        <Modal.Heading>Log in</Modal.Heading>
        <LoginModal />
      </Modal.Window>
      <Modal.Window name='sign_up_modal'>
        <Modal.Heading>Sign up</Modal.Heading>
        <RegisterModal />
      </Modal.Window>
    </>
  );
};
