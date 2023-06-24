import { MenuItem } from '@ui/Navbar/MenuItem';
import { Logout } from './Logout';

export const LoggedInNav = () => {
  return (
    <>
      <MenuItem onClick={() => {}}>My trips</MenuItem>
      <MenuItem onClick={() => {}}>My favorites</MenuItem>
      <MenuItem onClick={() => {}}>My reservations</MenuItem>
      <MenuItem onClick={() => {}}>My properties</MenuItem>
      <MenuItem onClick={() => {}}>Airbnb my home</MenuItem>
      <Logout />
    </>
  );
};
