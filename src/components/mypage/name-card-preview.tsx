import React from 'react';
import { Dialog } from 'radix-ui';
import DefaultProfile from '../common/default-profile';

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

interface NameCardPreviewProps {
  // userData: {
  //   name: string;
  //   position: string;
  //   joinedAt: string;
  //   interest: string[];
  //   purpose: string[];
  //   [key: string]: string | string[];
  // }
  userData: UserData;
}

const NameCardPreview = ({ userData }: NameCardPreviewProps) => {
  const handleDownload = () => {
    console.log('클릭됨');
    // 명함 다운로드 받는 로직...
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="w-fit mt-2 border-slate-600 border rounded-lg px-2 py-1">
          미리보기
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="text-gray-800">내 명함</Dialog.Title>
          <Dialog.Description />
          <div>
            <div className="flex flex-col items-center gap-2 text-gray-800 relative">
              <DefaultProfile />
              <h3 className="font-bold text-lg">{userData.name}</h3>
              <div className="flex items-center gap-2">
                <p>{userData.position}</p>
                <p className="w-[0.4] h-4 bg-black"></p>
                <p>{userData.joinedAt}</p>
              </div>
              {/* 매칭 요청 시간.. 어떤 컴포넌트..? */}
              <div className="bg-gray-500 flex gap-2 w-fit px-2 py-1 justify-center text-sm rounded-lg">
                <p className="text-white">매칭 요청</p>
                <p className="text-red-500">2:59</p>
              </div>
            </div>
            <div className="bg-slate-700 px-2 py-3 rounded-xl flex flex-col gap-2 mt-2">
              <p className="text-sm text-white">관심사</p>
              <div className="flex flex-wrap gap-2">
                {userData.interest?.map((item: string, index: number) => (
                  <p
                    key={index}
                    className="text-xs w-fit px-2 py-1 rounded-md text-white bg-slate-400"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-slate-700 px-2 py-3 rounded-xl flex flex-col gap-2 mt-2">
              <p className="text-sm text-white">참여목적</p>
              <div className="flex flex-wrap gap-2">
                {userData.purpose?.map((item: string, index: number) => (
                  <p
                    key={index}
                    className="text-xs w-fit px-2 py-1 rounded-md text-white bg-slate-400"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div
              className="text-slate-700 absolute -bottom-16 left-1/2 -translate-x-1/2 w-fit bg-white py-1 px-2 rounded-xl"
              onClick={handleDownload}
            >
              명함 다운로드
            </div>
          </div>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NameCardPreview;
