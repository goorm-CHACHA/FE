'use client';
import React from 'react';
import { MessageType } from '~/stores/use-notify-store';

interface NotifyNormalProps {
  messageData: {
    message: string;
    subMessage: string;
    status?: MessageType; // 필요시 NotifyStatus 타입으로 변경 가능
  };
}

const NotifyNormal = ({ messageData }: NotifyNormalProps) => {
  // const { message, subMessage, status } = useNotifyStore();
  const { message, subMessage, status } = messageData;

  return (
    <div className="flex flex-col justify-center bg-mauve12 p-2 rounded-2xl">
      <div className="py-2 px-4 flex flex-col gap-2 mb-4">
        <p className="text-lg font-semibold">{message}</p>
        <span className="text-gray-500">{subMessage}</span>
      </div>
      <div className="py-2 px-4">
        <p className="text-sm text-gray-500">
          {status ? status + '상태 1분..' : '에ㅓㄹ..'}
        </p>
      </div>
    </div>
  );
};

export default NotifyNormal;
