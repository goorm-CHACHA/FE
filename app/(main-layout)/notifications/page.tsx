// 'use client';
// import { useEffect, useMemo } from 'react';
// // import RadixTabs from '~/components/common/radix-tabs';
// import SwitchDemo from '~/components/common/switch';
// import NotifyBar from '~/components/notifications/notify-bar';
// import NotifyCard from '~/components/notifications/notify-card';
// import useNotifyStore from '~/stores/use-notify-store';
// interface NotifyProps {
//   onQuickConnectToggle?: (isOn: boolean) => void;
// }

// interface Notification {
//   id: number;
//   type: '1to1' | 'group';
// }

// const notifications: Notification = { id: 1, type: '1to1' };

// const Page = ({ onQuickConnectToggle }: NotifyProps) => {
//   const { getMessage, setNotifyStatus } = useNotifyStore();
//   useEffect(() => {
//     // 이미 사용자별 필터링이 되어있다고 가정하고, 간단한 키 값('1', '2', '3')을 사용합니다.
//     setNotifyStatus(
//       '1',
//       'request',
//       { id: 'user1', name: '홍길동' },
//       { id: 'user2', name: '김철수' },
//       22,
//       '1to1'
//     );
//     setNotifyStatus(
//       '2',
//       'request',
//       { id: 'user5', name: '김길동' },
//       { id: 'user2', name: '김철수' },
//       33,
//       '1to1'
//     );
//     setNotifyStatus(
//       '3',
//       'rejected',
//       { id: 'user3', name: '김지영' },
//       { id: 'user2', name: '김철수' },
//       45,
//       'group',
//     );
//   }, [setNotifyStatus]);
//   // const tabLabels = ['1:1 매칭', '그룹 매칭'];
//   const handleQuickConnectToggle = (isOn: boolean) => {
//     if (onQuickConnectToggle) onQuickConnectToggle(isOn);
//     //id값 가져와서.. 퀵 커넥트.. 연동...
//   };

//   const messages = getMessage();

//   const oneToOneNotifications = useMemo(()=>{
//     return Object.entries(messages)
//     .filter(([id, messageData]) => messageData.type === '1:1')
//     .map(([id, messageData]) => <NotifyCard key={id} messageData={messageData} />);
//   }, [messages]);

//   const groupNotifications = useMemo(() => {
//     return Object.entries(messages)
//       .filter(([id, messageData]) => messageData.type === 'group')
//       .map(([id, messageData]) => <NotifyCard key={id} messageData={messageData} />);
//   }, [messages]);
//   const notificationsToShow = useMemo(() => {
//     return Object.entries(messages).map(([id, messageData]) => {
//       return <NotifyCard key={id} messageData={messageData} />;
//     });
//   }, [messages]);

//   const tabLabels = ['1:1','그룹']
//   const tabContents = [oneToOneNotifications, groupNotifications]
//   return (
//     <div className="flex flex-col min-h-screen min-w-screen items-center pt-5 mx-4 my-4">
//       <div className="w-full md:max-w-md px-6">
//         <NotifyBar tabLabels={tabLabels} tabContent={tabContents} />
//         {/* <RadixTabs /> */}
//         <div className="w-full text-lg bg-mauve11 px-5 py-3 rounded-xl mb-8">
//           <p>알림 받기를 설정하고 네트워킹을 이어가세요.</p>
//           <div>
//             <SwitchDemo onToggle={handleQuickConnectToggle} />
//           </div>
//         </div>
//         <div className="flex flex-col gap-4">{notificationsToShow}</div>
//       </div>
//     </div>
//   );
// };

// export default Page;
'use client';
import { useCallback, useEffect, useMemo } from 'react';
import SwitchDemo from '~/components/common/switch';
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
        <ConnectOn handleQuickConnectToggle={handleQuickConnectToggle} />
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
        <ConnectOn handleQuickConnectToggle={handleQuickConnectToggle} />
        {Object.entries(messages)
          .filter(([, messageData]) => messageData.chatType === 'group')
          .map(([id, messageData]) => (
            <NotifyCard key={id} messageData={messageData} />
          ))}
      </div>
    );
  }, [messages, handleQuickConnectToggle]);

  // RadixTabs에 전달할 탭 라벨과 콘텐츠 배열
  const tabLabels = ['1:1 매칭', '그룹 매칭'];
  const tabContents = [oneToOneNotifications, groupNotifications];

  return (
    <div className="flex flex-col min-h-screen min-w-screen items-center pt-5 mx-4 my-4">
      <div className="w-full md:max-w-md">
        <NotifyBar tabLabels={tabLabels} tabContents={tabContents} />
      </div>
    </div>
  );
};

export default Page;

interface ConnectOnProps {
  handleQuickConnectToggle: (isOn: boolean) => void;
}

const ConnectOn = ({ handleQuickConnectToggle }: ConnectOnProps) => {
  return (
    <div className="w-full text-lg bg-mauve11 px-5 py-3 rounded-xl mb-8">
      <p>알림 받기를 설정하고 네트워킹을 이어가세요.</p>
      <div>
        <SwitchDemo onToggle={handleQuickConnectToggle} />
      </div>
    </div>
  );
};
