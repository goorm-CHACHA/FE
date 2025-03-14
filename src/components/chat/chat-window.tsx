import React from 'react';
import ChatBubble from './chat-bubble';
import DefaultProfile from '../common/default-profile';

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
  receiverProfileImg?: string;
}

const ChatWindow = ({
  messages,
  // receiverId,
  receiverProfileImg,
  status,
}: ChatWindowProps) => {
  return (
    <div className="flex-1 flex flex-col bg-[#1f1f1f]">
      {/* 🔹 채팅방 상단에 수신자 프로필 표시 */}
      <div className="p-4 flex items-center gap-3 border-b border-gray-700">
        <DefaultProfile size="profileChat" imgSrc={receiverProfileImg} />
        <span className="text-white text-lg font-semibold">상대방</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {status === 'accepted' ? (
          messages.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.senderId === 'other' ? 'receiver' : 'sender'}
              message={message.content}
              showProfile={message.senderId === 'other'} // 수신자의 경우만 프로필 표시
              imgSrc={receiverProfileImg}
            />
          ))
        ) : (
          <ChatBubble
            message="안녕하세요~"
            variant="receiver"
            showProfile={true}
            imgSrc={receiverProfileImg}
          />
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
