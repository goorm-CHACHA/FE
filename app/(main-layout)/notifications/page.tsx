'use client';

import { useCallback, useMemo } from 'react';

import TopNavigation from '~/components/common/top-nav';
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
    <div className="flex flex-col md:max-w-md min-h-screen w-screen justify-start m-auto min-w-screen items-center overflow-x-hidden">
      <TopNavigation
        title="알림"
        showQR={false}
        className="w-full !bg-transparent outline-none border-none text-left justify-left"
      />
      <div className="w-full md:max-w-md">
        <NotifyBar tabLabels={tabLabels} tabContents={tabContents} />
      </div>
    </div>
  );
};

export default NotificationsPage;
