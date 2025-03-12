'use client';

import NotificationButton from './notification-button';

const PushNotification = () => {
  return (
    <div className="w-full h-screen flex flex-col content-center justify-center text-center">
      <div className="text-lg mb-3">Push Notification</div>
      <div className="mx-auto">
        <NotificationButton />
      </div>
    </div>
  );
};

export default PushNotification;
