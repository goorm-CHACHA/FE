'use client';
import Button from './button';
import DefaultProfile from './default-profile';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  info1: string;
  info2: string;
  hideMatching?: boolean;
}

const Profile = ({
  className,
  name,
  info1,
  info2,
  hideMatching,
  ...props
}: ProfileProps) => {
  const [isAppliedMatching, setIsAppliedMatching] = useState(false);
  const clickMatchingHandler = () => {
    setIsAppliedMatching((prev) => !prev);
  };

  return (
    <div className="rounded-2xl p-4 min-w-[300px] max-w-[90%] m-auto sm:max-w-[50%] md:max-w-[40%]  break-words relative flex bg-white text-gray-700 gap-4 py-8 justify-between item-bottom">
      <div className="flex gap-4 items-center justify-left">
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
      {!hideMatching && (
        <div className="flex flex-col gap-4">
          <span
            className={`h-6 flex items-center text-xs border p-2 text-zinc-500 border-zinc-500 rounded-2xl ${isAppliedMatching ? 'opacity-100' : 'opacity-0'}`}
          >
            ✅ 매칭 완료
          </span>
          <Button
            size="sm"
            className={'h-10 w-full align-bottom'}
            variant={isAppliedMatching ? 'grey' : 'default'}
            onClick={clickMatchingHandler}
          >
            {isAppliedMatching === true ? `신청 완료` : `매칭 신청`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Profile;
