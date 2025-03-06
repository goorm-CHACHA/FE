'use client';

import { useState } from 'react';

import Button from '~/components/common/button';
import DefaultProfile from '~/components/common/default-profile';

interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  info1: string;
  info2: string;
}

const Profile = ({ id, name, info1, info2, ...props }: ProfileProps) => {
  const [isAppliedMatching, setIsAppliedMatching] = useState(false);

  const clickMatchingHandler = () => {
    setIsAppliedMatching((prev) => !prev);
  };

  return (
    <div
      className="border rounded-2xl p-6 max-w-[90%] sm:max-w-[50%] md:max-w-[40%] break-words bg-white text-gray-700 flex gap-4 justify-between text-sm"
      {...props}
    >
      <div className="flex gap-4 items-center justify-between">
        <DefaultProfile />
        <div>
          <p className="font-semibold">{name}</p>
          <div>
            <p>{info1}</p>
            <p>{info2}</p>
          </div>
        </div>
      </div>
      {/* 매칭할 때 버튼 */}
      <div className="flex flex-col gap-4">
        {
          <span
            className={`text-sm pb-3 ${isAppliedMatching ? 'opacity-100' : 'opacity-0'}`}
          >
            ✅ 매칭 완료
          </span>
        }
        <Button
          size="sm"
          className={'h-10 w-full flex align-bottom'}
          variant={isAppliedMatching ? 'grey' : 'default'}
          onClick={clickMatchingHandler}
        >
          {isAppliedMatching === true ? `신청 완료` : `매칭 신청`}
        </Button>
      </div>
    </div>
  );
};

export default Profile;
