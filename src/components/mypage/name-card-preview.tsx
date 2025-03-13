import React from 'react';
import { Dialog } from 'radix-ui';
import { UserData } from '~/types/user.types';
import ProfileImportant from '../common/profile-important';
import BadgesAligned from '../common/badges-aligned';
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
          <ProfileImportant layout="vertical" userData={userData} className="text-gray-700" />
            <BadgesAligned items={userData.interest} title="관심사" vertical={false} className='px-2 py-4'/>
            <BadgesAligned items={userData.purpose} title="참여목적" vertical={false} className='px-2 py-4'/>
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
