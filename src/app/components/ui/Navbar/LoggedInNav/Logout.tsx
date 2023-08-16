import { useState, useEffect } from 'react';
import { useCurrentUserStore } from '@hooks/useCurrentUserStore';
import { signOut } from 'next-auth/react';
import { MenuItem } from '@/app/components/ui/Navbar/MenuItem';

export const Logout = () => {
  const [triggerLogOut, setTriggerLogOut] = useState(false);
  const { setCurrentUser } = useCurrentUserStore();

  useEffect(() => {
    if (triggerLogOut) setCurrentUser(null);
    setTriggerLogOut(false);
  }, [triggerLogOut, setCurrentUser]);

  const signUserOut = () => {
    signOut();
    setTriggerLogOut(true);
  };

  return <MenuItem onClick={() => signUserOut()}>Logout</MenuItem>;
};
