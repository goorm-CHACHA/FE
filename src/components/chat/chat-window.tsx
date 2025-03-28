import React, { useRef, useEffect, useState } from 'react';
import ChatBubble from './chat-bubble';
import DefaultProfile from '../common/default-profile';
import TableApplicationCard from './table-application-card';
import {
  cancelTable,
  consentReservation,
  requestTable,
  // getWaitTime,
} from '~/utils/api/table';
import SystemMessage from './system-message';

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
  currentUser,
  chatRoomId,
}: ChatWindowProps) => {
  const chatRef = useRef<HTMLDivElement>(null);
  const [notifyTimeout, setNotifyTimeout] = useState(false);
  const [reserveTable, setReserveTable] = useState(false);
  // const [fullyBooked, setFullyBooked] = useState(false);
  // const [waitTime, setWaitTime] = useState<number | undefined>();

  // 삭제할거
  console.log(setNotifyTimeout, setReserveTable);
  console.log(chatRoomId);
  // 건드리는 중
  // 초기 상태를 테이블 대기 시간에 따라 'apply' 혹은 'waiting' 로 설정
  const [notification, setNotification] = useState<Notification>({
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
  /* ⭐️⭐️ waitTime에 따른 variants 설정!!
  if (waitTime === 0){
  variant: 'apply' 
  } else if {
    variant: 'waiting' 
    setFullyBooked(true);
   }
    여기에 waiting을 했는데 qr등록시간이 초과되었을 때도 {
    variant: 'apply' 
    하고 notifyTimeout true하기 
    }

*/
  // ⭐️⭐️ waiting 상태에서 타임아웃 되었을 때 될 것
  // useEffect(() => {
  //   if (notification.variant === 'waiting' && /* 여기에 timeout 조건 */) {
  //     setNotifyTimeout(true);
  //     setNotification({
  //       variant: 'apply',
  //       tableNumber: 1,
  //     })
  //     // variant를 'apply'로 바꿔야 하면 setNotification 등도 추가
  //   }
  // }, [/* 필요한 조건들 */]);

  // useEffect(() => {
  //   const fetchWaitTime = async () => {
  //     const time = await getWaitTime(chatRoomId);
  //     console.log('💡 가져온 waitTime:', waitTime);
  //     console.log('chatRoomId', chatRoomId);
  //     setWaitTime(time);
  //     if (time <= 0) {
  //       setNotification({
  //         variant: 'apply',
  //         tableNumber: undefined,
  //       });
  //     } else if (time > 0) {
  //       setNotification({
  //         variant: 'waiting',
  //         tableNumber: undefined,
  //       });
  //       setFullyBooked(true); // <- 혹시 메시지 띄우고 싶다면
  //     } else {
  //       setNotification({
  //         variant: 'assigned',
  //         tableNumber: undefined,
  //       });
  //     }
  //   };

  //   fetchWaitTime();
  // }, [chatRoomId, waitTime]);

  // /table-application-card onConfirm 함수 ✅
  const handleConfirm = async () => {
    if (chatRoomId) {
      const tableNumber = await requestTable(chatRoomId);
      console.log('테이블 신청 확인');
      // 여기에 테이블 배정 알림 확인 푸시알림
      setNotification({
        variant: 'assigned',
        tableNumber: tableNumber,
      });
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
    console.log('currentUser', currentUser);
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
            currentUser={currentUser}
            // waitTime={waitTime}
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
          {notifyTimeout && <SystemMessage type="timeout" />}
          {reserveTable && <SystemMessage type="complete" />}
          {reserveTable && (
            <SystemMessage type="complete" nickname={currentUser} />
          )}
          {/* {fullyBooked && <SystemMessage type="notice" />} */}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
