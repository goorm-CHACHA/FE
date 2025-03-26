import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { getFcmToken } from '~/utils/firebase/get-fcm-token';
import { requestPermission } from '~/utils/firebase/request-permission';
import api from '~/utils/api/api';

interface UseNetworkStoreType {
  isConnect: boolean; //네트워킹 상태 변경
  isSubscribed: boolean; //알림 수신 여부 변경
  setIsConnect: () => void;
  toggleSubscription: (checked: boolean) => void;
}

export const useNetworkStore = create<UseNetworkStoreType>()(
  persist(
    (set, get) => ({
      isConnect: false,
      isSubscribed: false,
      setIsConnect: async () => {
        set((state) => ({ isConnect: !state.isConnect })); // UI 즉시 반영

        try {
          const response = await api.put('/api/users/updateParticipate');
          if (response.status !== 200) {
            set((state) => ({ isConnect: !state.isConnect })); // 실패 시 롤백
            return;
          }

          // 연결 ON일 때만 권한 요청 및 토큰 등록
          const { isConnect, isSubscribed } = get();
          if (isConnect && !isSubscribed) {
            const granted = await requestPermission();
            if (granted) {
              const token = await getFcmToken();

              const fcmRes = await api.post('/api/FCM/register-token', {
                token,
              });
              if (fcmRes.status !== 200) {
                console.error('FCM 등록 실패');
                return;
              }

              const notifyRes = await api.put('/api/users/updateNotifications');
              if (notifyRes.status !== 200) {
                console.error('알림 상태 업데이트 실패');
                return;
              }

              set({ isSubscribed: true });
            } else {
              console.warn('🔕 알림 권한 거부됨');
            }
          }
        } catch (error) {
          console.error('네트워킹 상태 변경 오류:', error);
          set((state) => ({ isConnect: !state.isConnect }));
        }
      },

      toggleSubscription: async (checked) => {
        set({ isSubscribed: checked, isConnect: false }); // UI 즉시 반영

        try {
          const notifyRes = await api.put('/api/users/updateNotifications', {
            enabled: checked,
          });
          if (notifyRes.status !== 200) {
            console.error('알림 상태 업데이트 실패');
            set((prev) => ({
              isSubscribed: !checked,
              isConnect: !prev.isConnect,
            })); // 실패 시 롤백
          }
        } catch (error) {
          console.error('알림 설정 오류:', error);
          set((prev) => ({
            isSubscribed: !checked,
            isConnect: !prev.isConnect,
          })); // 오류 발생 시 롤백
        }
      },
    }),

    {
      name: 'network-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
