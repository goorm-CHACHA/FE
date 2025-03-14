import { deleteToken } from 'firebase/messaging';
import { messaging } from '~/utils/firebase/firebase';

export async function deleteFcmToken() {
  if (typeof window === 'undefined') return;

  try {
    if (!messaging) {
      console.log('messaging을 지원하지 않습니다.');
      return;
    }
    deleteToken(messaging);
  } catch (error) {
    console.error('FCM token 에러:', error);
  }
}
