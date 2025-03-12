import React from 'react';
import { GrFormNext } from 'react-icons/gr';
import DefaultProfile from '../common/default-profile';
import Button from '../common/button';
import { MessageType } from '../../stores/use-notify-store';
import { useRouter } from 'next/navigation';

interface NotifyConnectProps {
  messageData: {
    message: string;
    subMessage: string;
    status?: MessageType;
    requester?: { id: string; name?: string } | null;
    chatRoomId?: number;
  };
}

const NotifyConnect = ({ messageData }: NotifyConnectProps) => {
  const { message, subMessage, chatRoomId } = messageData;

  const router = useRouter();

  const handleAccept = () => {
    // 채팅룸 ID가 존재하면 해당 채팅룸 페이지로 이동
    if (chatRoomId) {
      router.push(`/chatroom/${chatRoomId}`);
    } else {
      // 채팅룸 ID가 없으면 기본 채팅룸 페이지로 이동하거나 에러 처리 가능
      router.push('/chatroom');
    }
  };

  return (
    <div className="flex flex-col justify-center bg-mauve12 p-2 rounded-2xl">
      <div className="flex flex-col py-2 px-4 gap-4 md:w-fit">
        <div className="flex justify-between items-center">
          <p className="inline-block bg-slate-900 px-4 py-2 rounded-3xl">
            매칭요청
            <span className="inline-block ml-2 text-red-600">2:59</span>
          </p>
          <GrFormNext />
        </div>
        <div className="flex justify-left items-center gap-8">
          <DefaultProfile />
          <div className="flex flex-col justify-center gap-2 break-words">
            <p className="text-lg font-semibold">{message}</p>
            <span className="text-gray-500">{subMessage}</span>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <p>1분전</p>
          <Button onClick={handleAccept}>수락</Button>
        </div>
      </div>
    </div>
  );
};

export default NotifyConnect;
