import React from 'react';
import NameCardPreview from './name-card-preview';
import { UserData } from '~/types/user.types';
import ProfileImportant from '../common/profile-important';
import BadgesAligned from '../common/badges-aligned';

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
        <BadgesAligned items={userData.interest} title="관심사" vertical={false} className='px-2 py-4' />
        <BadgesAligned items={userData.purpose} title="참여 목적" vertical={false} className='px-2 py-4' />
      <div className="mt-2">
        <NameCardPreview userData={userData} />
      </div>
    </div>
  );
};

export default ModifyCard;

