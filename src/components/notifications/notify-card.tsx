'use client';
import React from 'react';
import { GrFormNext } from 'react-icons/gr';
import { MessageType } from '../../stores/use-notify-store';
import { useRouter } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import type { Locale } from 'date-fns';
import NormalCard from '../card/normal-card';
import RequestCard from '../card/request-card';
import { NotifyUser } from '~/types/notify-user';
interface NotifyProps {
  messageData: {
    message: string;
    subMessage: string;
    status?: MessageType;
    requester?: NotifyUser;
    chatRoomId?: number;
    timeStamp?: number;
  };
}

const NotifyCard = ({ messageData }: NotifyProps) => {
  const { message, subMessage, chatRoomId, timeStamp, status } = messageData;

  const router = useRouter();

  const handleAccept = () => {
    // 채팅룸 ID가 존재하면 해당 채팅룸 페이지로 이동
    if (chatRoomId) {
      router.push(`/chat/${chatRoomId}`);
    } else {
      // 채팅룸 ID가 없으면 기본 채팅룸 페이지로 이동하거나 에러 처리 가능
      router.push('/chat');
    }
  };

  const notificationsToShow = () => {
    if (status === 'request') {
      return (
        <RequestCard
          message={message}
          subMessage={subMessage}
          timeStamp={timeStamp}
          onAccept={handleAccept}
          requester={messageData.requester?.id}
        />
      );
    } else {
      return (
        <NormalCard
          message={message}
          subMessage={subMessage}
          timeStamp={timeStamp}
        />
      );
    }
  };

  return notificationsToShow();
};

export default NotifyCard;

// COMPONENTS
// ▼ ******* 📦 container
// 🔸 Msg 컨테이너 - 안에 message, subMessage 선택 취하
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const MsgContainer = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col justify-center gap-2 break-words">
      {children}
    </div>
  );
};
// ⏏️ container 📦 ********

// ✼✼ 화살표 이모티콘
export const Arrow = () => {
  return (
    <div>
      <GrFormNext />
    </div>
  );
};

interface TimeLeftProps {
  text: string;
}
// ✼✼매칭요청 뱃지 시간 3분 가정하고 시간 흘러감..
export const TimeLeft = ({ text }: TimeLeftProps) => {
  return (
    <p className="inline-block bg-slate-900 px-3 py-1 text-body-sm rounded-3xl">
      {text}
      <span className="inline-block ml-2 text-red-600">2:59</span>
    </p>
  );
};

// ✼✼푸시알림 뱃지
export const PushAlarm = () => {
  return (
    <p className="inline-block bg-slate-900 px-3 py-1 text-body-sm rounded-3xl">
      푸시알람
    </p>
  );
};

// ✼✼ Main Message , Sub Message
export const MainMsg = ({ message }: { message: string }) => {
  return <p className="font-semibold text-body-md line-clamp-1">{message}</p>;
};

export const SubMsg = ({ subMessage }: { subMessage: string }) => {
  return <span className="text-body-sm text-gray-500">{subMessage}</span>;
};

// ✼✼알림 시간.
interface TimeAgoProps {
  timestamp?: number;
}

export const TimeAgo = ({ timestamp = Date.now() }: TimeAgoProps) => {
  const timeAgo = formatDistanceToNow(new Date(timestamp), {
    addSuffix: true,
    locale: ko as unknown as Locale,
  });
  return <span>{timeAgo}</span>;
};
