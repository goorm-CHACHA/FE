import React from 'react';
import ProfileImportant from '../common/profile-important';
import { UserData } from '~/types/user.types';
import { Card, CardBody } from '../common/card';
import BadgesAligned from '../common/badges-aligned';
import Button from '../common/button';
import { IoIosBookmark } from 'react-icons/io';
import StatusForGroup from './status-for-group';

interface MatchCardProps {
  userData: UserData;
  inMyPage?: boolean;
  bgOnChipInterest?: boolean;
  bgOnChipPurpose?: boolean;
  group?: boolean;
}

const MatchCard = ({ userData, inMyPage, group = false }: MatchCardProps) => {
  // Data for the profile card

  return (
    <Card className="w-[335px] bg-[color:var(--primitive-color-gray-warm-800)]  border-none bg-[#333333] rounded-2xl">
      {' '}
      {/* rounded-[var(--size-radius-12)] */}
      <CardBody className="flex flex-col pt-[var(--size-spacing-20)] px-[var(--size-spacing-12)] pb-[var(--size-spacing-12)]">
        <ProfileImportant userData={userData} layout="horizontal">
          <BadgesAligned
            items={userData.interest}
            className="!bg-transparent"
            vertical={false}
          />
        </ProfileImportant>
        <div className="mt-2 self-stretch rounded-radius-8 bg-gray-neutral-900 flex flex-row items-center justify-start py-spacing-10 pl-spacing-16 pr-spacing-10 gap-3 text-smi text-text-accent">
          <div className="flex items-center gap-[var(--size-spacing-6)] flex-1 bg-[#1f1f1f] mt-1 py-1 px-2 rounded-xl text-orange-500">
            <IoIosBookmark className="text-lg text-[#] w-3 relative h-3.5" />
            <BadgesAligned
              items={userData.purpose}
              className="!bg-transparent !m-0 !text-bases"
              vertical={false}
              noneChip={true}
            />
            {!inMyPage && (
              <Button
                variant="red"
                size="sm"
                className="bg-primitive-color-opacity-fill border-primitive-color-opacity rounded-[var(--size-radius-8)] px-[var(--size-spacing-16)] py-[var(--size-spacing-10)]"
              >
                <span className="font-body3-normal-b-14 text-semantic-color-text-subtle tracking-[var(--body3-normal-b-14-letter-spacing)] leading-[var(--body3-normal-b-14-line-height)]">
                  네트워킹 신청
                </span>
              </Button>
            )}
          </div>
        </div>
        {group && <StatusForGroup variants="available" />}
      </CardBody>
    </Card>
  );
};

export default MatchCard;
