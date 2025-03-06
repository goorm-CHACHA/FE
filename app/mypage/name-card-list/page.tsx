'use client';
import React, { useRef, useState } from 'react';
import BottomNavigation from '~/components/common/bottom-nav';
import Profile from '~/components/common/profile';

const Page = () => {
  // const DivToImage = () => {
  //   const exportDivImageRef: any = useRef();
  //   const [downloading, setDownloading] = useState<boolean>(false);
  // }
  const downloadHandler = () => {
    console.log('het koos gemaakt');
  };
  return (
    <div>
      <h1>저장한 명함 목록</h1>
      <div className="flex flex-col items-center">
        {/* ⬇️  바로 밑에 div는 map으로 내가 저장한 카드 프린트...*/}
        <div className="flex flex-col justify-center align-middle gap-4">
          <Profile
            name="김기획"
            info1="병아리 기획자"
            info2="웹/앱 기획"
            hideMatching={true}
          />
          <Profile
            name="이개발"
            info1="시니어 개발자"
            info2="SI 솔루션"
            hideMatching={true}
          />
          <Profile
            name="박디쟌"
            info1="3년차"
            info2="스타트업"
            hideMatching={true}
          />
        </div>
      </div>
      <div
        className="flex justify-center items-center m-8 p-1 min-w-[250px] max-w-[400px] bg-white text-gray-700 cursor-pointer"
        onClick={downloadHandler}
      >
        이미지 다운로드
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Page;
