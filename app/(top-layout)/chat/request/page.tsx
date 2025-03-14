// app/chat/request/ChatRequestPage.tsx
'use client';

import { useState } from 'react';
import { requestChat } from '~/utils/websoket'; // requestChat 함수 import

export default function ChatRequestPage({ userId }: { userId: number }) {
  const [receiverId, setReceiverId] = useState<number | null>(null);

  const handleSendRequest = async () => {
    if (receiverId) {
      await requestChat(userId, receiverId); // user1이 user2에게 채팅 요청을 보냄
      console.log(`채팅 요청을 ${receiverId}에게 보냈습니다.`);
    }
  };

  return (
    <div>
      <h1>채팅 요청 보내기</h1>
      <div>
        <input
          type="number"
          placeholder="받는 사람의 ID"
          value={receiverId ?? ''}
          onChange={(e) => setReceiverId(Number(e.target.value))}
        />
        <button onClick={handleSendRequest}>채팅 요청 보내기</button>
      </div>
    </div>
  );
}
