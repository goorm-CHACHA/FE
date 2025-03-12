export async function requestPermission() {
  try {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      console.log('알림 권한 허용');
      return true;
    } else {
      console.log('알림 권한 허용 안 됨');
      return false;
    }
  } catch (error) {
    console.error('알림 권한 에러:', error);
    return false;
  }
}
