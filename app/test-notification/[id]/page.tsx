// ChatNotifier.tsx
import { useEffect, useState } from 'react';
import { connectWebSocket, disconnectWebSocket } from '~/utils/websoket';

interface ChatNotification {
  requesterId: number;
  receiverId: number;
  message: string;
  messageType: string;
}

interface ChatNotifierProps {
  userId: number;
  chatRoomId: number;
}

export default function ChatNotifier({
  userId,
  chatRoomId,
}: ChatNotifierProps) {
  const [notification, setNotification] = useState<ChatNotification | null>(
    null,
  );

  useEffect(() => {
    connectWebSocket(
      chatRoomId,
      () => console.log(`✅ Notifier WebSocket 연결됨 (채팅방 ${chatRoomId})`),
      (message: string) => {
        try {
          const parsed = JSON.parse(message) as ChatNotification;
          // 특정 userId가 알림 대상인 경우에만 setNotification
          if (parsed.receiverId === userId) {
            setNotification(parsed);
          }
        } catch (err) {
          console.error('알림 메시지 파싱 오류:', err);
        }
      },
    );

    return () => {
      disconnectWebSocket();
    };
  }, [userId, chatRoomId]);

  return (
    <div>
      {notification && (
        <div className="p-4 bg-blue-500 text-white rounded shadow-md z-50 fixed top-16 left-1/2 transform -translate-x-1/2">
          💬 {notification.message}
        </div>
      )}
    </div>
  );
}
