import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UseNetworkStoreType {
  isConnect: boolean;
  setIsConnect: () => void;
}

export const useNetworkStore = create<UseNetworkStoreType>()(
  persist(
    (set) => ({
      isConnect: false,
      setIsConnect: () => set((state) => ({ isConnect: !state.isConnect })),
    }),
    {
      name: 'network-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
