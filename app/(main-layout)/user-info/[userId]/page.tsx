'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import BadgesAligned from '~/components/common/badges-aligned';
import ProfileImportant from '~/components/common/profile-important';
import { mockUserData } from '~/components/mypage/mock-user-data';
import { TimeLeft } from '~/components/notifications/notify-card';

const UserInfoPage = () => {
  const params = useParams();
  const userId = params?.userId as string;

  const user = mockUserData.find((user) => user.id === userId);

  if (!user) {
    return <p className="text-lg text-white">유저 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <ProfileImportant userData={user} layout="vertical" />
      <TimeLeft text="매칭 요청까지" />
      <div className="flex justify-between w-full gap-4 px-5">
        <BadgesAligned
          className="flex-1 p-4 w-full "
          items={user.interest}
          vertical={true}
          title="관심사"
          noneChip={true}
        />
        <BadgesAligned
          className="flex-1 p-4 w-full"
          items={user.purpose}
          vertical={true}
          title="참여목적"
          noneChip={true}
        />
      </div>
    </div>
  );
};

export default UserInfoPage;
