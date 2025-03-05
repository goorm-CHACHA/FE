'use client';

import { useRouter } from 'next/navigation';
import Button from '~/components/common/button';

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen px-6 justify-center items-center">
      <Button
        size={'full'}
        onClick={() => {
          router.push('/home');
        }}
      >
        네트워킹존 입장하기
      </Button>
    </div>
  );
};

export default Page;
