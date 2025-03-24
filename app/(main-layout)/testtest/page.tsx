'use client';

import Button from '~/components/common/button';
import { useMatchModalStore } from '~/stores/use-match-modal-store';
import NetworkingModalFlow from '~/components/match/modal-for-match';
import { Card, CardBody } from '~/components/common/card';
import ProfileImportant from '~/components/common/profile-important';
import BadgesAligned from '~/components/common/badges-aligned';
import Image from 'next/image';

interface DummyUserData {
  interests: string[];
  nickName: string;
  jobValue: string;
  career: string;
  affiliation: string;
  participationPurpose: string;
}

// ✅ 임시 유저 데이터
const dummyUserData: DummyUserData = {
  interests: ['hh', 'ww', 'gdg'],
  nickName: 'jjjj',
  jobValue: 'gg',
  career: 'gg',
  affiliation: 'affilia',
  participationPurpose: 'gggg',
};

const Page = () => {
  const { openModal } = useMatchModalStore();

  return (
    <div>
      {/* 신청하기 버튼 */}
      <Button onClick={() => openModal('profile')}>
        신청하기 버튼이라고 치고...
      </Button>
      <Card>
        <CardBody className="flex flex-col !gap-1">
          <div className="mb-1">
            <ProfileImportant userData={dummyUserData} layout="horizontal">
              {dummyUserData.affiliation}
            </ProfileImportant>
          </div>
          <div className="mb-1">
            <BadgesAligned items={dummyUserData.interests} />
          </div>
          <div className="flex !items-center !text-orange-500 gap-[6px] w-full p-2 !bg-transparent">
            <Image
              src="/assets/svgs/bookmark.svg"
              alt="bookmark"
              width={12}
              height={14}
            />
            <BadgesAligned
              items={[dummyUserData.participationPurpose]}
              userInfoColor={true}
              noneChip={true}
            />
          </div>
        </CardBody>
      </Card>
      {/* 전체 네트워킹 모달 흐름을 포함하는 하나의 컴포넌트 */}
      <NetworkingModalFlow />
    </div>
  );
};

export default Page;
