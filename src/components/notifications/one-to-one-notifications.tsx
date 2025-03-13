import NotifyCard from '~/components/notifications/notify-card';
import ConnectOnBanner from '../common/connect-on-banner';

interface OneToOneNotificationsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: Record<string, any>;
  handleQuickConnectToggle: (isOn: boolean) => void;
}

const OneToOneNotifications = ({
  messages,
  handleQuickConnectToggle,
}: OneToOneNotificationsProps) => {
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
};

export default OneToOneNotifications;
