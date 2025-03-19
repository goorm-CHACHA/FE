'use client';

import { useCallback, useMemo } from 'react';

import NotifyBar from '~/components/notifications/notify-bar';
import OneToOneNotifications from '~/components/notifications/one-to-one-notifications';
import GroupNotifications from '~/components/notifications/group-notifications';
import useNotifications from '~/hooks/use-notifications';

const NotificationsPage = () => {
  const messages = useNotifications();

  const handleQuickConnectToggle = useCallback((isOn: boolean) => {
    console.log('Quick Connect toggled:', isOn);
  }, []);

  const oneToOneNotifications = useMemo(
    () => (
      <OneToOneNotifications
        messages={messages}
        handleQuickConnectToggle={handleQuickConnectToggle}
      />
    ),
    [messages, handleQuickConnectToggle],
  );

  const groupNotifications = useMemo(
    () => (
      <GroupNotifications
        messages={messages}
        handleQuickConnectToggle={handleQuickConnectToggle}
      />
    ),
    [messages, handleQuickConnectToggle],
  );

  const tabLabels = ['1:1', '그룹'];
  const tabContents = [oneToOneNotifications, groupNotifications];

  return (
    <div className="flex flex-col gap-2 max-w-3xl min-h-screen w-full mx-auto items-center overflow-x-hidden">
      <div className="w-full">
        <NotifyBar tabLabels={tabLabels} tabContents={tabContents} />
      </div>
    </div>
  );
};

export default NotificationsPage;
