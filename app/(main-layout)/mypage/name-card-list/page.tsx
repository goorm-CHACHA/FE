'use client';
import React from 'react';
import MatchCard from '~/components/match/match-card';
import { mockUserData } from '~/components/mypage/mock-user-data';

const Page = () => {
  const downloadHandler = () => {
    console.log('다운로드 클릭됨');
  };
  return (
    <div className="flex flex-col m-auto items-center justify-center w-full md:max-w-md px-6">
      <div>
        {/* ⬇️  바로 밑에 div는 map으로 내가 저장한 카드 프린트... 명함 누르면 모달 열려야 함 (모달 수정 작업 먼저 필요)*/}
        <div className="flex gap-2 flex-col">
          {mockUserData.map((user) => (
            <MatchCard
              key={user.id}
              userData={user}
              inMyPage={true}
              bgOnChipInterest={false}
              bgOnChipPurpose={true}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div
          className="m-8 p-1 min-w-[250px] max-w-[400px] text-center bg-white text-gray-700 cursor-pointer"
          onClick={downloadHandler}
        >
          이미지 다운로드
        </div>
      </div>
    </div>
  );
};

export default Page;
