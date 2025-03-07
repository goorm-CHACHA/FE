'use client';

import { useState } from 'react';
import ChatWindow from '~/components/chat/chat-window';
import MessageInput from '~/components/chat/message-input';
import TopNavigation from '~/components/common/top-nav';

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  status: 'accepted' | 'pending';
}

// 임시 채팅 목록 데이터
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

// 임시 메시지 데이터
const tempMessages = [
  { id: 1, senderId: 'user', content: '안녕하세요!', timestamp: '10:00' },
  {
    id: 2,
    senderId: 'other',
    content: '네, 안녕하세요. 어떤 분야에서 일하시나요?',
    timestamp: '10:02',
  },
  {
    id: 3,
    senderId: 'user',
    content: '저는 프론트엔드 개발자입니다.',
    timestamp: '10:05',
  },
];

const ChatPage = () => {
  const [chats, setChats] = useState<Chat[]>(tempChats);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(tempChats[0]);
  const [messages, setMessages] = useState(tempMessages);

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: messages.length + 1,
      senderId: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen flex-col">
      <TopNavigation title="채팅방" showQR={false} />

      <div className="flex-1 flex flex-col">
        {selectedChat && (
          <ChatWindow
            messages={messages}
            receiverId={selectedChat.id}
            status={selectedChat.status}
          />
        )}
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatPage;
