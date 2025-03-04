'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';
import Button from './button';
import DefaultProfile from './default-profile';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const ProfileVariants = cva(
  'rounded-2xl p-4 max-w-[90%] sm:max-w-[50%] md:max-w-[40%]  break-words relative',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-700 flex gap-4 py-8 justify-between item-bottom',
      }, 
      size: {
        default: 'text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ProfileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ProfileVariants> {
  name: string;
  info1: string;
  info2: string;
}

const Profile = ({
  variant,
  size,
  className,
  name,
  info1,
  info2,
  ...props
}: ProfileProps) => {
    const [isAppliedMatching, setIsAppliedMatching] = useState(false);

    const clickMatchingHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsAppliedMatching(prev => !prev);
    };

  return (
    <div 
    className={cn(ProfileVariants({ variant, size }), className)}
    {...props}>
        <div className="flex gap-4 items-center">
          <DefaultProfile />
          <div>
              <p className='font-semibold'>{name}</p>
              <div>
                <p>{info1}</p>
                <p>{info2}</p>
              </div>
          </div>
        </div>
        {/* 매칭할 때 버튼 */}
        <div>
          { isAppliedMatching === true && <Button size="sm" variant="outline" className='h-6 align-bottom mb-6'>✅ 매칭 완료</Button> }  
          <Button size="sm" className={clsx("h-10 w-full align-bottom", { "bg-gray-500": isAppliedMatching })} onClick={clickMatchingHandler}>{isAppliedMatching === true ? `신청 완료` : `매칭 신청`}</Button>
        </div>
    </div>
  );
};

export default Profile;

