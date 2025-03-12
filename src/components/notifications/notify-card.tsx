'use client';
import React from 'react';
import { GrFormNext } from 'react-icons/gr';
import DefaultProfile from '../common/default-profile';
import Button from '../common/button';
import { MessageType } from '../../stores/use-notify-store';
import { useRouter } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import type { Locale } from 'date-fns';
import { Card, CardBody, CardFooter, CardHeader } from '../common/card';
interface NotifyProps {
  messageData: {
    message: string;
    subMessage: string;
    status?: MessageType;
    requester?: { id: string; name?: string } | null;
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

  return (
    <div>
      <div>{notificationsToShow()}</div>
    </div>
  );
};

export default NotifyCard;

//  💳 CARDS
interface CardProps {
  message: string;
  subMessage: string;
  timeStamp?: number;
  onAccept?: () => void; // "수락" 버튼 클릭 핸들러
}

const RequestCard = ({
  message,
  subMessage,
  timeStamp,
  onAccept,
}: CardProps) => {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center mb-3">
        <TimeLeft />
        <Arrow />
      </CardHeader>
      <CardBody className={`flex justify-left items-center gap-4 mb-4`}>
        <DefaultProfile />
        <MsgContainer>
          <MainMsg message={message} />
          <SubMsg subMessage={subMessage} />
        </MsgContainer>
      </CardBody>
      <CardFooter className="flex justify-between items-center align-top">
        <TimeAgo timestamp={timeStamp || Date.now()} />
        <Button onClick={onAccept}>수락</Button>
      </CardFooter>
    </Card>
  );
};
const NormalCard = ({ message, subMessage, timeStamp }: CardProps) => {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center mb-3">
        <PushAlarm />
      </CardHeader>
      <CardBody className={`flex justify-left items-center gap-4 mb-4`}>
        <MsgContainer>
          <MainMsg message={message} />
          <SubMsg subMessage={subMessage} />
        </MsgContainer>
      </CardBody>
      <CardFooter className="flex justify-between items-center align-top">
        <TimeAgo timestamp={timeStamp || Date.now()} />
      </CardFooter>
    </Card>
  );
};
// COMPONENTS
// ▼ ******* 📦 container
// 🔸 Msg 컨테이너 - 안에 message, subMessage 선택 취하
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MsgContainer = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col justify-center gap-2 break-words">
      {children}
    </div>
  );
};
// ⏏️ container 📦 ********

// ✼✼ 화살표 이모티콘
const Arrow = () => {
  return (
    <div>
      <GrFormNext />
    </div>
  );
};

// ✼✼매칭요청 뱃지 시간 3분 가정하고 시간 흘러감..
const TimeLeft = () => {
  return (
    <p className="inline-block bg-slate-900 text-sm px-4 py-2 rounded-3xl">
      매칭요청
      <span className="inline-block ml-2 text-red-600">2:59</span>
    </p>
  );
};

// ✼✼푸시알림 뱃지
const PushAlarm = () => {
  return (
    <p className="inline-block bg-slate-900 px-4 py-2 text-sm rounded-3xl">
      푸시알람
    </p>
  );
};

// ✼✼ Main Message , Sub Message
const MainMsg = ({ message }: { message: string }) => {
  return <p className="font-semibold line-clamp-2">{message}</p>;
};

const SubMsg = ({ subMessage }: { subMessage: string }) => {
  return <span className="text-gray-500 line-clamp-2">{subMessage}</span>;
};

// ✼✼알림 시간.
interface TimeAgoProps {
  timestamp?: number;
}

const TimeAgo = ({ timestamp = Date.now() }: TimeAgoProps) => {
  const timeAgo = formatDistanceToNow(new Date(timestamp), {
    addSuffix: true,
    locale: ko as unknown as Locale,
  });
  return <span>{timeAgo}</span>;
};

// ************ 일단 만들어본... 매칭 쪽으로?

// const Title =  () => {
//   return <p className="text-lg font-bold">관심사</p>
// }
