'use client';

import { useRouter } from 'next/navigation';
import Button from '~/components/common/button';

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 min-h-screen px-6 justify-center items-center">
      <p className="text-white text-lg">사전등록 랜딩 페이지</p>
      <Button
        size={'full'}
        variant={'primary'}
        onClick={() => {
          router.push('/pre/register/profile');
        }}
      >
        사전등록하기
      </Button>
    </div>
  );
};

export default Page;
