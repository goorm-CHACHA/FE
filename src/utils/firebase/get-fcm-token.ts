import { getToken } from 'firebase/messaging';
import { messaging } from '~/utils/firebase/firebase';

export async function getFcmToken() {
  if (typeof window === 'undefined') return;

  try {
    if (!messaging) {
      console.log('messaging을 지원하지 않습니다.');
      return;
    }

    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
    });

    if (token) {
      console.log('FCM Token:', token);
    } else {
      console.log('FCM token이 없습니다.');
    }
  } catch (error) {
    console.error('FCM token 에러:', error);
  }
}
