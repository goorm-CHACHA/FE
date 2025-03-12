'use client';

import { useState } from 'react';
import { getFcmToken } from '~/utils/firebase/get-fcm-token';
import { requestPermission } from '~/utils/firebase/request-permission';
import Button from './common/button';

const NotificationButton = () => {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  async function handleRequestPermission() {
    const granted = await requestPermission();
    setIsPermissionGranted(granted);

    if (granted) {
      await getFcmToken();
    }
  }

  return (
    <Button
      onClick={handleRequestPermission}
      variant={`${isPermissionGranted ? 'grey' : 'default'}`}
      disabled={isPermissionGranted}
      size={'lg'}
    >
      {isPermissionGranted ? '알림 권한 허용됨' : '푸시 알림 권한 요청'}
    </Button>
  );
};

export default NotificationButton;
