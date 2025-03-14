'use client';

import React, { useState, useEffect } from 'react';

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
      <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[375px] h-[55px] px-5 py-3.5 bg-[#1f1f1f]">
        <div className="flex justify-between items-center flex-grow">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            {/* 채팅방에서는 나가기 버튼을 왼쪽에 배치 */}
            {isChatRoom && (
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_1751_1384)">
                    <path
                      d="M15 4.5H5V18.5C5 19.6046 5.89543 20.5 7 20.5H15"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 15.5L19 12.5M19 12.5L16 9.5M19 12.5H9"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1751_1384">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
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
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_1751_1404)">
                    <path
                      d="M20 12.5H4"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 4.49976H18C19.1046 4.49976 20 5.39519 20 6.49976V8.49976"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 20.4998L6 20.4998C4.89543 20.4998 4 19.6043 4 18.4998L4 16.4998"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 16.4998V18.4998C20 19.6043 19.1046 20.4998 18 20.4998H16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 8.49976L4 6.49976C4 5.39519 4.89543 4.49976 6 4.49976L8 4.49976"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1751_1404">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
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
