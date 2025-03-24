'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  Accordions,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '~/components/common/accordion/accordion';
import InfoOptional from '~/components/mypage/info-optional';
import InfoRequired from '~/components/mypage/info-required';
import { mockUserData } from '~/components/mypage/mock-user-data';
import ModifyCard from '~/components/mypage/modify-card';
import { UserData } from '~/types/user.types';

const Page = () => {
  const currentUserId = 321;
  const currentUserData = mockUserData.find(
    (user) => user.id === currentUserId,
  ) as UserData | undefined;

  const signOutHandler = () => {
    console.log('hello ');
  };

  const [userData, setUserData] = useState<UserData | null>(
    currentUserData || null,
  );

  const handleUserDataChange = (
    key: keyof UserData,
    value: string | string[],
  ) => {
    setUserData((prevData) => {
      if (prevData) {
        return {
          ...prevData,
          [key]: value,
        };
      }
      return prevData;
    });
  };

  useEffect(() => {
    // 입력값이 바뀌고 있는가? 수시로 값을 받는 거 말고 나중에 성능 최적화할 것.
    console.log(userData);
  }, [userData]);

  if (!userData) {
    return <div> 사용자 정보 없습니다.</div>;
  }
  return (
    <div className="m-auto w-full max-w-2xl flex flex-col justify-center items-center gap-4 mt-2 px-5 ">
      <Accordions className="w-full rounded-2xl">
        <AccordionItem value="item-1" className="w-full">
          <AccordionTrigger>
            <div className="flex justify-start items-center gap-6 w-full">
              <p>내 정보 수정</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="w-full">
            <div className="flex flex-col justify-center items-center gap-2 w-full">
              <div className="w-full">
                <p className="mb-2">필수</p>
                <InfoRequired
                  userData={userData}
                  onUserDataChange={handleUserDataChange}
                />
              </div>
              <div className="w-full">
                <p className="mb-2">선택사항</p>
                <InfoOptional
                  userData={userData}
                  onUserDataChange={handleUserDataChange}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="w-full">
          <AccordionTrigger className="w-full">내 명함 수정</AccordionTrigger>
          <AccordionContent className="w-full">
            <div className="w-full">
              <ModifyCard userData={userData} />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="w-full">
          <Link href="/mypage/name-card-list">
            <AccordionTrigger className="w-full">
              저장한 명함 목록
            </AccordionTrigger>
          </Link>
        </AccordionItem>
      </Accordions>
      <div
        className="h-20 bg-[#222222] w-full rounded-md items-center flex justify-center text-white"
        onClick={signOutHandler}
      >
        {' '}
        로그아웃
      </div>
    </div>
  );
};

export default Page;

// <ModalOneBtn text="매칭이 신청되었어요!" textBtn="확인" />
// <ModalTwoBtn
//   text="매칭이 신청되었어요! 요청 수락되면 알림으로 알려드릴까요?"
//   textLBtn="확인"
//   textRBtn="취소"
// />
