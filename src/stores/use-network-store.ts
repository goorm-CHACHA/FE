import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { deleteFcmToken } from '~/utils/firebase/delete-fcm-token';
import { getFcmToken } from '~/utils/firebase/get-fcm-token';
import { requestPermission } from '~/utils/firebase/request-permission';

interface UseNetworkStoreType {
  isConnect: boolean;
  isSubscribed: boolean;
  setIsConnect: () => void;
  toggleSubscription: (checked: boolean) => void;
}

export const useNetworkStore = create<UseNetworkStoreType>()(
  persist(
    (set) => ({
      isConnect: false,
      isSubscribed: false,
      setIsConnect: () => set((state) => ({ isConnect: !state.isConnect })),
      toggleSubscription: async (checked) => {
        try {
          if (checked) {
            const granted = await requestPermission();

            if (granted) {
              await getFcmToken();
              set({ isSubscribed: true });
            } else {
              // 푸시 알림 거부
              set({ isSubscribed: false });
            }
          } else {
            // 알림 해제
            await deleteFcmToken();
            set({ isSubscribed: false });
          }
        } catch (error) {
          console.error('알림 설정 오류:', error);
        }
      },
    }),
    {
      name: 'network-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
