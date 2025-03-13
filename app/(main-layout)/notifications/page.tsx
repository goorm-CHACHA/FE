'use client';
import { useCallback, useEffect, useMemo } from 'react';
import ConnectOnBanner from '~/components/common/connect-on-banner';
import TopNavigation from '~/components/common/top-nav';
import NotifyBar from '~/components/notifications/notify-bar';
import NotifyCard from '~/components/notifications/notify-card';
import useNotifyStore from '~/stores/use-notify-store';

interface NotifyProps {
  onQuickConnectToggle?: (isOn: boolean) => void;
}

const Page = ({ onQuickConnectToggle }: NotifyProps) => {
  const { getMessage, setNotifyStatus } = useNotifyStore();

  useEffect(() => {
    // 예시: 백엔드에서 필터링된 데이터를 받는다고 가정하고, setNotifyStatus의 마지막 인자로 알림 타입을 전달합니다.
    setNotifyStatus(
      '1',
      'request',
      { id: 'user1', name: '홍길동' },
      { id: 'user2', name: '김철수' },
      22,
      '1to1',
    );
    setNotifyStatus(
      '2',
      'request',
      { id: 'user5', name: '김길동' },
      { id: 'user1', name: '김철수' },
      33,
      '1to1',
    );
    setNotifyStatus(
      '3',
      'rejected',
      { id: 'user3', name: '김지영' },
      { id: 'user2', name: '김철수' },
      45,
      'group',
    );
  }, [setNotifyStatus]);

  const handleQuickConnectToggle = useCallback(
    (isOn: boolean) => {
      if (onQuickConnectToggle) onQuickConnectToggle(isOn);
    },
    [onQuickConnectToggle],
  );

  const messages = getMessage();

  // 탭별로 알림 데이터를 분리합니다.
  const oneToOneNotifications = useMemo(() => {
    return (
      <div>
        <ConnectOnBanner handleQuickConnectToggle={handleQuickConnectToggle} />
        {Object.entries(messages)
          .filter(([, messageData]) => messageData.chatType === '1to1')
          .map(([id, messageData]) => (
            <NotifyCard key={id} messageData={messageData} />
          ))}
      </div>
    );
  }, [messages, handleQuickConnectToggle]);

  const groupNotifications = useMemo(() => {
    return (
      <div>
        <ConnectOnBanner handleQuickConnectToggle={handleQuickConnectToggle} />
        {Object.entries(messages)
          .filter(([, messageData]) => messageData.chatType === 'group')
          .map(([id, messageData]) => (
            <NotifyCard key={id} messageData={messageData} />
          ))}
      </div>
    );
  }, [messages, handleQuickConnectToggle]);

  // RadixTabs에 전달할 탭 라벨과 콘텐츠 배열
  const tabLabels = ['1:1', '그룹'];
  const tabContents = [oneToOneNotifications, groupNotifications];

  return (
    <div className="flex flex-col min-h-screen w-screen justify-start min-w-screen items-center overflow-x-hidden">
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

export default Page;
