import { Modal } from '@ui/Modal';
import { MenuItem } from '@ui/Navbar/MenuItem';
import { RegisterModal } from './RegisterModal';
import { LoginModal } from './LoginModal';

export const GuestModal = () => {
  return (
    <Modal>
      <Modal.Open opens='login_modal'>
        <MenuItem>Login</MenuItem>
      </Modal.Open>
      <Modal.Window name='login_modal'>
        <Modal.Heading>Login</Modal.Heading>
        <LoginModal />
      </Modal.Window>

      <Modal.Open opens='sign_up_modal'>
        <MenuItem>Sign up</MenuItem>
      </Modal.Open>
      <Modal.Window name='sign_up_modal'>
        <Modal.Heading>Register</Modal.Heading>
        <RegisterModal />
      </Modal.Window>
    </Modal>
  );
};
