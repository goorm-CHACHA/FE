// app/chat/accept/ChatNotifierPage.tsx
'use client';

import { useState, useEffect } from 'react';
import { acceptChat, handleChatAcceptFlow } from '~/utils/websoket'; // acceptChat 함수 import

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

  const handleAcceptChat = () => {
    if (notification) {
      handleChatAcceptFlow(notification.requesterId, notification.receiverId);
      console.log(`${notification.requesterId}의 채팅 요청을 수락했습니다.`);
    }
  };

  return (
    <div>
      {notification && (
        <div className="p-4 bg-blue-500 text-white rounded">
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
