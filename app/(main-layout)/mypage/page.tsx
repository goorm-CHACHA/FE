'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  Accordions,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '~/components/common/accordion/accordion';
import DefaultProfile from '~/components/common/default-profile';
import ModalOneBtn from '~/components/common/modal-one-btn';
import ModalTwoBtn from '~/components/common/modal-two-btn';
import InfoOptional from '~/components/mypage/info-optional';
import InfoRequired from '~/components/mypage/info-required';
import { mockUserData } from '~/components/mypage/mock-user-data';
import ModifyCard from '~/components/mypage/modify-card';

interface UserData {
  profileImage: string;
  name: string;
  position: string;
  joinedAt: string;
  interest: string[];
  email: string;
  id: string;
  password: string;
  introduce: string;
  contact: string;
  purpose: string[];
}

const Page = () => {
  const currentUserId = 'hong123';
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
    <div className="flex flex-col justify-center items-center gap-4 mt-2">
      <Accordions>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <DefaultProfile />
            <p>내 정보 수정</p>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col justify-center items-center gap-2">
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
        <AccordionItem value="item-2">
          <AccordionTrigger>내 명함 수정</AccordionTrigger>
          <AccordionContent className="w-full">
            <div className="w-full">
              <ModifyCard userData={userData} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordions>
      <div className="h-20 bg-white w-[300px] rounded-md items-center flex justify-center text-violet10">
        <Link href="/mypage/name-card-list">저장한 명함 목록</Link>
      </div>
      <div className="h-20 bg-white w-[300px] rounded-md items-center flex justify-center text-violet10">
        <Link href="/qr-reader">QR</Link>
      </div>
      <div
        className="h-20 bg-white w-[300px] rounded-md items-center flex justify-center text-violet10"
        onClick={signOutHandler}
      >
        {' '}
        로그아웃
      </div>
      <ModalOneBtn text="매칭이 신청되었어요!" textBtn="확인" />
      <ModalTwoBtn
        text="매칭이 신청되었어요! 요청 수락되면 알림으로 알려드릴까요?"
        textLBtn="확인"
        textRBtn="취소"
      />
    </div>
  );
};

export default Page;
