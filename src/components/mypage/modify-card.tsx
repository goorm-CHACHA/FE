import React from 'react';
import NameCardPreview from './name-card-preview';
import { UserData } from '~/types/user.types';
import ProfileImportant from '../common/profile-important';

interface ModifyCardProps {
  userData: UserData;
}

const ModifyCard = ({ userData }: ModifyCardProps) => {
  console.log(userData);

  if (!userData) {
    return <div>사용자 데이터를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <ProfileImportant userData={userData} layout="vertical" />
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
      <div className="mt-2">
        <NameCardPreview userData={userData} />
      </div>
    </div>
  );
};

export default ModifyCard;
