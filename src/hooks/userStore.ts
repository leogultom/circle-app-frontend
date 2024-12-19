import { UserType } from '@/types/user.types';
import { create } from 'zustand';

interface UserState {
  user: UserType | null;
  setUser: (user: UserType) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
