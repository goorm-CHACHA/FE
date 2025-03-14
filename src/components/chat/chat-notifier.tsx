import { useState, useEffect } from 'react';
import {
  checkExistingChatRoom,
  acceptChat,
  connectWebSocket,
} from '~/utils/websoket';

export default function ChatNotifierPage({ userId }: { userId: number }) {
  const [notification, setNotification] = useState<any>(null); // 알림 상태

  useEffect(() => {
    // 예시로 임시 알림 데이터
    const mockNotification = {
      requesterId: 1,
      receiverId: userId,
      message: '채팅 요청이 도착했습니다.',
      messageType: 'request', // 요청 메시지
    };

    setNotification(mockNotification); // 알림을 상태로 저장
  }, [userId]);

  // 채팅 요청 수락 처리 함수
  const handleAcceptChat = async () => {
    if (notification) {
      const { requesterId, receiverId } = notification;

      // 1. 채팅방 존재 여부 확인
      const existingChatRoomId = await checkExistingChatRoom(
        requesterId,
        receiverId,
      );

      if (existingChatRoomId) {
        // 2. 채팅방 존재하면 WebSocket 연결
        console.log('💬 기존 채팅방 존재:', existingChatRoomId);
        connectWebSocket(existingChatRoomId, () => {
          console.log('✅ WebSocket 연결 성공');
        });
      } else {
        // 3. 채팅방이 없으면 채팅 수락
        console.log(`${requesterId}의 채팅 요청을 수락합니다.`);
        acceptChat(requesterId, receiverId); // 채팅 수락 함수 호출
      }
    }
  };

  return (
    <div>
      {notification && (
        <div className="fixed top-0 w-full p-4 bg-blue-500 text-white rounded">
          <p>{notification.message}</p>
          {notification.messageType === 'request' && (
            <button
              onClick={handleAcceptChat}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
            >
              채팅 수락
            </button>
          )}
        </div>
      )}
    </div>
  );
}
