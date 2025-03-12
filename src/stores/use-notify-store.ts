import { create } from 'zustand';

export type MessageType =
  | 'request'
  | 'completed'
  | 'success'
  | 'waiting'
  | 'cancelled'
  | 'rejected'
  | null;

interface NotificationData {
  status: MessageType;
  requester: { id: string; name?: string } | null;
  receiver: { id: string; name?: string } | null;
  chatRoomId?: number;
}

interface MessageData {
  message: string;
  subMessage: string;
  status?: MessageType;
  requester?: { id: string; name?: string } | null;
}

interface NotifyStore {
  notifyMap: Record<string, NotificationData>;
  setNotifyStatus: (
    id: string,
    status: MessageType,
    requester?: { id: string; name?: string } | null,
    receiver?: { id: string; name?: string } | null,
    chatRoomId?: number,
  ) => void;
  getMessage: () => Record<string, MessageData>;
}

const useNotifyStore = create<NotifyStore>((set, get) => ({
  notifyMap: {},
  setNotifyStatus: (id, status, requester = null, receiver = null) => {
    set((state) => ({
      notifyMap: {
        ...state.notifyMap,
        [id]: { status, requester, receiver },
      },
    }));
  },
  getMessage: () => {
    const { notifyMap } = get();
    return Object.keys(notifyMap).reduce(
      (acc, key) => {
        const notification = notifyMap[key];
        const requesterName = notification.requester?.name || '상대방';
        const receiverName = notification.receiver?.name || '나';
        let messageData: MessageData;
        switch (notification.status) {
          case 'completed':
            messageData = {
              message: '네트워킹이 종료되었어요!',
              subMessage: '만족스러운 네트워킹이 되었나요?',
              status: notification.status,
            };
            break;
          case 'success':
            messageData = {
              message: '네트워킹이 성사되었습니다!',
              subMessage: '축하드립니다!',
              status: notification.status,
            };
            break;
          case 'waiting':
            messageData = {
              message: '상대방이 네트워킹을 고민 중입니다..',
              subMessage: '성사되면 알려드릴게요',
              status: notification.status,
            };
            break;
          case 'request':
            messageData = {
              message: `${requesterName}님이 네트워킹을 요청했습니다.`,
              subMessage: '3분 안에 수락하지 않으면 자동 취소됩니다.',
              status: notification.status,
              requester: notification.requester,
            };
            break;
          case 'cancelled':
            messageData = {
              message: `${receiverName} 님과의 네트워킹을 취소했습니다.`,
              subMessage: '새로운 네트워킹을 시도해보세요',
              status: notification.status,
            };
            break;
          case 'rejected':
            messageData = {
              message: `${requesterName}님이 네트워킹을 거절하였습니다.`,
              subMessage: '담엔 아닐 거예요...;;',
              status: notification.status,
            };
            break;
          default:
            messageData = { message: '', subMessage: '' };
        }
        acc[key] = messageData;
        return acc;
      },
      {} as Record<string, MessageData>,
    );
  },
}));

export default useNotifyStore;
