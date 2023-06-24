import { User } from '@prisma/client';
import { create } from 'zustand';

interface CurrentUserState {
  currentUser: User | null;
  setCurrentUser(user: User | null): void;
}

export const useCurrentUserStore = create<CurrentUserState>()((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
}));
