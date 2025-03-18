'use client';

import { useState } from 'react';
import ChatWindow from '~/components/chat/chat-window';
import MessageInput from '~/components/chat/message-input';

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  status: 'accepted' | 'pending';
}

const tempChats: Chat[] = [
  { id: 1, name: '홍길동', lastMessage: '안녕하세요!', status: 'accepted' },
  {
    id: 2,
    name: '김철수',
    lastMessage: '네트워킹 하실래요?',
    status: 'pending',
  },
  {
    id: 3,
    name: '이영희',
    lastMessage: '프로젝트 협업 어떠세요?',
    status: 'accepted',
  },
];

const tempMessages = [
  { id: 1, senderId: 'USER1', content: '안녕하세요!', timestamp: '10:00' },
  {
    id: 2,
    senderId: 'USER2',
    content: '네, 안녕하세요. 어떤 분야에서 일하시나요?',
    timestamp: '10:02',
  },
  {
    id: 3,
    senderId: 'USER1',
    content: '저는 프론트엔드 개발자입니다.',
    timestamp: '10:05',
  },
];

const ChatPage = () => {
  const [chats] = useState<Chat[]>(tempChats);
  const [selectedChat] = useState<Chat | null>(tempChats[0]);
  const [messages, setMessages] = useState(tempMessages);
  const currentUser = 'USER1';
  console.log(chats);
  const handleSendMessage = async (message: string) => {
    if (!selectedChat) {
      alert('채팅방을 선택해주세요!');
      return;
    }

    const tempMessage = {
      id: messages.length + 1,
      senderId: currentUser,
      content: message,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages((prev) => [...prev, tempMessage]);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HTTP_API_URL}/chats/send`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            createTime: new Date().toISOString(),
            chatRoomId: selectedChat.id,
            message,
            senderName: currentUser,
          }),
        },
      );

      if (!response.ok) throw new Error('서버 응답 오류');
    } catch (err) {
      console.error('전송 실패:', err);
      setMessages((prev) => prev.filter((msg) => msg.id !== tempMessage.id));
    }
  };

  return (
    <div className="flex flex-col w-full min-h-full">
      {selectedChat ? (
        <>
          <ChatWindow
            messages={messages}
            receiverId={selectedChat.id}
            status={selectedChat.status}
            receiverProfileImg="/images/icons/chat/Profile.png"
            currentUser={currentUser}
            receiverName={selectedChat.name}
            receiverStatus={selectedChat.status}
          />
          <div className="h-[60px] border-t border-gray-700">
            <MessageInput onSendMessage={handleSendMessage} />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-full text-white">
          채팅방을 선택해주세요!
        </div>
      )}
    </div>
  );
};

export default ChatPage;
