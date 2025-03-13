import ConnectOnBanner from '~/components/common/connect-on-banner';
import NotifyCard from '~/components/notifications/notify-card';

interface GroupNotificationsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: Record<string, any>;
  handleQuickConnectToggle: (isOn: boolean) => void;
}

const GroupNotifications = ({
  messages,
  handleQuickConnectToggle,
}: GroupNotificationsProps) => {
  return (
    <div className='w-full max-w-sm  shadow-md rounded-lg'>
      <ConnectOnBanner handleQuickConnectToggle={handleQuickConnectToggle} />
      {Object.entries(messages)
        .filter(([, messageData]) => messageData.chatType === 'group')
        .map(([id, messageData]) => (
          <NotifyCard key={id} messageData={messageData} />
        ))}
    </div>
  );
};

export default GroupNotifications;
