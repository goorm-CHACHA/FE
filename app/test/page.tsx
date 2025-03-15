'use client';

import React from 'react';
import NotificationButton from '~/components/notification-button';

const page = () => {
  return (
    <>
      <div className="h-screen flex flex-col content-center justify-center text-center">
        <div className="text-lg mb-3">Push Notification</div>
        <div className="mx-auto">
          <NotificationButton />
        </div>
      </div>
    </>
  );
};

export default page;
