import { MenuItem } from '@ui/Navbar/MenuItem';
import { Modal } from '@ui/Modal';
import { RentModal } from '@ui/Modal/RentModal';
import { Logout } from './Logout';
import { useRouter } from 'next/navigation';

export const LoggedInNav = () => {
  const router = useRouter();
  return (
    <>
      <MenuItem onClick={() => router.push('/trips')}>My trips</MenuItem>
      <MenuItem onClick={() => {}}>My favorites</MenuItem>
      <MenuItem onClick={() => router.push('/reservations')}>
        My reservations
      </MenuItem>
      <MenuItem onClick={() => {}}>My properties</MenuItem>
      <Modal>
        <Modal.Open opens='rent_modal'>
          <MenuItem>Airbnb your home</MenuItem>
        </Modal.Open>
        <Modal.Window name='rent_modal'>
          <Modal.Heading>Airbnb your home!</Modal.Heading>
          <RentModal />
        </Modal.Window>
      </Modal>
      <Logout />
    </>
  );
};
