// stores/use-user-store.ts
import { create } from 'zustand';
import { UserData } from '~/types/user.types';
interface UserStore {
  users: UserData[];
  selectedUser: UserData | null;
  setUsers: (users: UserData[]) => void;
  setSelectedUser: (user: UserData) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  selectedUser: null,
  setUsers: (users) => set({ users }),
  setSelectedUser: (user) => set({ selectedUser: user }),
}));

// use-user-store.ts
