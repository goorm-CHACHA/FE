'use client';
import { useEffect, useMemo } from 'react';
import SwitchDemo from '~/components/common/switch';
import NotifyBar from '~/components/notifications/notify-bar';
import NotifyConnect from '~/components/notifications/notify-connect';
import NotifyNormal from '~/components/notifications/notify-normal';
import useNotifyStore from '~/stores/use-notify-store';
interface NotifyProps {
  onQuickConnectToggle?: (isOn: boolean) => void;
}

interface Notification {
  id: number;
  type: '1:1' | 'group';
}

const notifications: Notification = { id: 1, type: '1:1' };

const Page = ({ onQuickConnectToggle }: NotifyProps) => {
  const { getMessage, setNotifyStatus } = useNotifyStore();
  useEffect(() => {
    // 이미 사용자별 필터링이 되어있다고 가정하고, 간단한 키 값('1', '2', '3')을 사용합니다.
    setNotifyStatus(
      '1',
      'request',
      { id: 'user1', name: '홍길동' },
      { id: 'user2', name: '김철수' },
      22,
    );
    setNotifyStatus(
      '2',
      'request',
      { id: 'user5', name: '김길동' },
      { id: 'user2', name: '김철수' },
      33,
    );
    setNotifyStatus(
      '3',
      'rejected',
      { id: 'user3', name: '김지영' },
      { id: 'user2', name: '김철수' },
      45,
    );
  }, [setNotifyStatus]);
  // const tabLabels = ['1:1 매칭', '그룹 매칭'];
  const handleQuickConnectToggle = (isOn: boolean) => {
    if (onQuickConnectToggle) onQuickConnectToggle(isOn);
    //id값 가져와서.. 퀵 커넥트.. 연동...
  };

  const messages = getMessage();

  const notificationsToShow = useMemo(() => {
    return Object.entries(messages).map(([id, messageData]) => {
      if (messageData.status === 'request') {
        return <NotifyConnect key={id} messageData={messageData} />;
      } else {
        return <NotifyNormal key={id} messageData={messageData} />;
      }
    });
  }, [messages]);
  // const requestNotification = notifyList.find(notification => notification.status === 'request');

  return (
    <div className="flex flex-col min-h-screen min-w-screen items-center pt-5 mx-4 my-4">
      <div className="w-full md:max-w-md px-6">
        <NotifyBar id={notifications.id} type={notifications.type} />
        <div className="w-full text-lg bg-mauve11 px-5 py-3 rounded-xl mb-8">
          <p>알림 받기를 설정하고 네트워킹을 이어가세요.</p>
          <div>
            <SwitchDemo onToggle={handleQuickConnectToggle} />
          </div>
        </div>
        <div className="flex flex-col gap-4">{notificationsToShow}</div>
      </div>
    </div>
  );
};

export default Page;
