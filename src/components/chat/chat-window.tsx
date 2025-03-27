import React, { useRef, useEffect, useState } from 'react';
import ChatBubble from './chat-bubble';
import DefaultProfile from '../common/default-profile';
import TableApplicationCard from './table-application-card';
import {
  cancelTable,
  consentReservation,
  requestTable,
} from '~/utils/api/table';
interface Message {
  id: number;
  senderName: string;
  message: string;
  createTime: string;
}

interface Notification {
  variant: 'apply' | 'waiting' | 'assigned';
  tableNumber?: number;
}

interface ChatWindowProps {
  messages: Message[];
  receiverId: number;
  status: 'accepted' | 'pending';
  receiverJob: string;
  currentUser: string;
  receiverName: string;
  receiverStatus: string;
  chatRoomId: number;
}

const ChatWindow = ({
  messages,
  receiverId,
  receiverName,
  receiverJob,
  receiverStatus,
  chatRoomId,
}: ChatWindowProps) => {
  const chatRef = useRef<HTMLDivElement>(null);

  // 건드리는 중
  // 초기 상태를 테이블 대기 시간에 따라 'apply' 혹은 'waiting' 로 설정
  const [notification] = useState<Notification>({
    variant: 'apply',
    tableNumber: undefined,
  });

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // 백엔드에서 알림 데이터 가져오기 (주석 처리)
  /*
  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const response = await fetch('/api/notifications');
        const data: Notification = await response.json();
        setNotification(data);
      } catch (error) {
        console.error('Failed to fetch notification:', error);
      }
    };

    fetchNotification();
  }, []);
  */
  /*
  if (waitTime === 0){
  variant: 'apply' 
  } else if {
    variant: 'waiting' 
   }
*/
  // /table-application-card onConfirm 함수 ✅
  const handleConfirm = async () => {
    if (chatRoomId) {
      await requestTable(chatRoomId);
      console.log('테이블 신청 확인');
    } else {
      console.warn('👀 tableNumber 없음');
    }
  };

  // setShowSecondCancelModal
  // 지금 나가는 거 waiting 중일 때,
  const handleCancel = async () => {
    if (chatRoomId) {
      console.log('테이블 신청 취소');
      await cancelTable(chatRoomId);
    } else {
      console.warn('👀 tableNumber가 없음', chatRoomId, '<-챗룸');
    }
    // 여기에 취소 로직 추가
  };
  const handleConsent = async () => {
    await consentReservation(chatRoomId, receiverId);
  };

  return (
    <div className="flex flex-col h-full mt-[55px]">
      {/* 상단 고정 알림 */}
      <div className="fixed top-[55px] left-0 right-0 z-10">
        {notification && (
          <TableApplicationCard
            variant={notification.variant}
            tableNumber={notification.tableNumber}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            chatRoomId={chatRoomId}
            onConsent={handleConsent}
            // waitTime 여기에 ..
          />
        )}
      </div>
      {/* 알림 높이만큼 공간 확보 */}
      <div className="h-[85px]" />

      {/* 프로필 + 채팅 메시지 스크롤 영역 */}
      <div className="flex-1 overflow-y-auto " ref={chatRef}>
        {/* 프로필 */}
        <div className="flex flex-col items-center p-6 border border-gray-700/60">
          <DefaultProfile size="profileChat" jobValue={receiverJob} />
          <div className="flex flex-col items-center gap-1.5 mt-6">
            <p className="text-lg font-semibold text-center text-[#fefefe] w-[200px]">
              {receiverName}
            </p>
            <p className="text-[13px] text-center text-[#a6a6a6] w-[228px]">
              {receiverStatus}
            </p>
          </div>
        </div>

        {/* 채팅 메시지 영역 */}
        <div className="p-4 ">
          {messages.map((message) => (
            <ChatBubble
              key={message.createTime}
              message={message.message} // 메시지 내용
              createTime={message.createTime}
              senderName={message.senderName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
