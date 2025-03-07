import React from 'react';
import ChatBubble from './chat-bubble';

interface Message {
  id: number;
  senderId: string;
  content: string;
  timestamp: string;
}

interface ChatWindowProps {
  messages: Message[];
  receiverId: number;
  status: 'accepted' | 'pending';
}

const ChatWindow = ({ messages, receiverId, status }: ChatWindowProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {status === 'accepted' ? (
        messages.map((message) => (
          <ChatBubble
            key={message.id}
            variant={message.senderId === 'other' ? 'receiver' : 'sender'}
            message={message.content}
          />
        ))
      ) : (
        <ChatBubble
          variant="system"
          size="small"
          message="채팅 요청 대기 중..."
        />
      )}
    </div>
  );
};

export default ChatWindow;
