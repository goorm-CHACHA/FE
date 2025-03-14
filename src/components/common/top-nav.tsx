'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface TopNavigationProps {
  title?: string;
  className?: string;
  onQuickConnectToggle?: (isOn: boolean) => void;
  isChatRoom?: boolean; // 채팅방 모드인지 여부
}

const TopNavigation = ({
  title = '채팅방',
  className = '',
  onQuickConnectToggle,
  isChatRoom = false,
}: TopNavigationProps) => {
  const [isQuickConnectOn, setIsQuickConnectOn] = useState(false);

  // 퀵 커넥트 상태 변경 함수
  const handleQuickConnectToggle = () => {
    setIsQuickConnectOn((prev) => {
      const newState = !prev;
      return newState;
    });
  };

  // 상태 변경 후 부모 컴포넌트에 상태 전달
  useEffect(() => {
    if (onQuickConnectToggle) {
      onQuickConnectToggle(isQuickConnectOn);
    }
  }, [isQuickConnectOn, onQuickConnectToggle]);

  return (
    <div className={`flex justify-start items-start ${className}`}>
      <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-full max-w-[768px] h-[55px] px-5 py-3.5 bg-[#1f1f1f]">
        <div className="flex justify-between items-center flex-grow">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            {/* 채팅방에서는 나가기 버튼을 왼쪽에 배치 */}
            {isChatRoom && (
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <Image
                  src="/assets/svgs/ExitIcon.svg"
                  alt="Exit Icon"
                  width={24}
                  height={24}
                />
              </div>
            )}

            <p className="text-lg font-semibold text-white">{title}</p>

            {/* 퀵 커넥트 버튼은 채팅방에서 숨김 */}
            {!isChatRoom && (
              <div
                className={`flex items-center rounded-2xl w-[41px] bg-[#ff9257] ${isQuickConnectOn ? 'justify-start' : 'justify-end'}`}
                onClick={handleQuickConnectToggle}
              >
                <div className="h-[22px] w-[18px] rounded-2xl bg-white" />
              </div>
            )}
          </div>

          {/* 오른쪽에 아이콘 (채팅방에서는 다르게 처리) */}
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-2.5">
            {isChatRoom ? (
              <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <Image
                  src="/assets/svgs/Scanner.svg"
                  alt="Scanner Icon"
                  width={24}
                  height={24}
                />
              </div>
            ) : (
              <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-2">
                  <div className="w-8 h-8 relative bg-[#02e473]/25">
                    <div className="w-[26.67px] h-[26.67px] absolute left-[1.67px] top-[1.67px] rounded-sm border border-[#02e473]/70 border-dashed" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
