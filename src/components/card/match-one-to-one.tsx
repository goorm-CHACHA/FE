import React from 'react';
import ProfileImportant from '../common/profile-important';
import BadgesAligned from '../common/badges-aligned';
import { IoIosBookmark } from 'react-icons/io';
import Button from '../common/button';
import { UserData } from '~/types/user.types';

interface MatchCardProps {
  userData: UserData;
  inMyPage?: boolean;
  bgOnChipInterest?: boolean;
  bgOnChipPurpose?: boolean;
  isGroup?: boolean;
  alignedOne?: boolean;
  isTopAligned?: boolean;
}

const MatchOneToOne = ({ userData, inMyPage }: MatchCardProps) => {
  return (
    <>
      <ProfileImportant
        userData={userData}
        layout="horizontal"
        isTopAligned={true}
      >
        <BadgesAligned
          items={userData.interest}
          className="!bg-transparent !text-body-sm mt-[0.5px]"
          vertical={false}
        />
      </ProfileImportant>
      <div className="mt-4 py-1 self-stretch rounded-radius-8 bg-gray-neutral-900 flex flex-row items-center justify-start py-spacing-10 pl-spacing-16 pr-spacing-10 gap-3 text-sm text-text-accent">
        <div
          className={`flex items-center gap-[var(--size-spacing-6)] flex-1 bg-[#1f1f1f] py-1 px-3 rounded-xl text-orange-500 ${inMyPage ? 'block' : 'justify-between'}`}
        >
          <div className="flex !items-center">
            <IoIosBookmark className="text-lg text-[#] w-3 relative h-3.5" />
            <BadgesAligned
              items={userData.purpose}
              className="!bg-transparent !m-0 !text-body-s"
              vertical={false}
              noneChip={true}
              alignedOne={true}
            />
          </div>
          {!inMyPage && (
            <Button variant="gray-700" size="sm" className="h-8">
              <span className="font-body3-normal-b-14 !text-body-sm text-semantic-color-text-subtle tracking-[var(--body3-normal-b-14-letter-spacing)] leading-[var(--body3-normal-b-14-line-height)]">
                네트워킹 신청
              </span>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default MatchOneToOne;
