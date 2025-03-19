'use client';
import React from 'react';
import { Card, CardBody } from '~/components/common/card';
import DefaultProfile from '~/components/common/default-profile';
import { mockUserData } from '~/components/mypage/mock-user-data';
import Image from 'next/image';

const Page = () => {
  const downloadHandler = () => {
    console.log('다운로드 클릭됨');
  };
  return (
    <div className="flex flex-col m-auto items-center justify-center w-full max-w-3xl px-6 py-4">
      <div>
        {/* ⬇️  바로 밑에 div는 map으로 내가 저장한 카드 프린트... 명함 누르면 모달 열려야 함 (모달 수정 작업 먼저 필요)*/}
        <div className="flex gap-2 flex-col">
          {mockUserData.map((user) => (
            <Card key={user.id}>
              <CardBody className="flex gap-[10px]">
                <DefaultProfile size="nameCard" />
                {/* <DefaultProfile imgSrc={user.profileImage}/> */}
                <div className="flex items-center">
                  <p className="text-body-lg">{user.name}</p>
                  <Image
                    src="/assets/svgs/NextPage.svg"
                    alt="BackArrow Icon"
                    width={24}
                    height={24}
                  />
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div
          className="p-1 w-full text-center
           md:max-w-3xl m-auto text-white bg-[#222222] rounded-xl cursor-pointer"
          onClick={downloadHandler}
        >
          이미지 다운로드
        </div>
      </div>
    </div>
  );
};

export default Page;
