'use client';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col p-5 gap-4">
      <div className="flex flex-col rounded-[12px] bg-gray-warm-800 px-5">
        <Link
          href="/mypage/edit-profile"
          className="flex justify-between items-center w-full border-b border-gray-neutral-600"
        >
          <p className="text-base text-gray-neutral-50 w-full py-5">
            내 정보 수정
          </p>
          <Image
            src="/assets/svgs/Arrow.svg"
            width={24}
            height={24}
            alt="arrow"
          />
        </Link>
        <button className="flex justify-between items-center w-full border-b border-gray-neutral-600 text-left">
          <p className="text-base text-gray-neutral-50 w-full py-5">
            내 명함 보기
          </p>
          <Image
            src="/assets/svgs/Arrow.svg"
            width={24}
            height={24}
            alt="arrow"
          />
        </button>
        <Link
          href="/mypage/name-card-list"
          className="flex justify-between items-center w-full border-b border-gray-neutral-600"
        >
          <p className="text-base text-gray-neutral-50 w-full py-5">
            저장한 명함 목록
          </p>
          <Image
            src="/assets/svgs/Arrow.svg"
            width={24}
            height={24}
            alt="arrow"
          />
        </Link>
      </div>
    </div>
  );
};

export default Page;
