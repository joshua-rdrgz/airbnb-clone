import { SafeUser } from '@/types';
import { create } from 'zustand';

interface CurrentUserState {
  currentUser: SafeUser | null;
  setCurrentUser(user: SafeUser | null): void;
}

export const useCurrentUserStore = create<CurrentUserState>()((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
}));
