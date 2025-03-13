import React from 'react';
import { Dialog } from 'radix-ui';
import DefaultProfile from '../common/default-profile';
import { UserData } from '~/types/user.types';
import ProfileImportant from '../common/profile-important';
interface NameCardPreviewProps {
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
          <ProfileImportant layout="vertical" userData={userData} />
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
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NameCardPreview;
