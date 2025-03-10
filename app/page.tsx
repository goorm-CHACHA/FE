'use client';

import { useRouter } from 'next/navigation';
import Button from '~/components/common/button';
import { useFormStore } from '~/stores/use-form-store';

const Page = () => {
  const router = useRouter();
  const { qrData, formData } = useFormStore();

  return (
    <div className="flex flex-col gap-4 min-h-screen px-6 justify-center items-center">
      <Button
        size={'full'}
        variant={'red'}
        onClick={() => {
          router.push('/register');
        }}
      >
        사전등록하기
      </Button>
      <Button
        size={'full'}
        onClick={() => {
          router.push('/home');
        }}
      >
        네트워킹존 입장하기
      </Button>
      <Button onClick={() => console.log(qrData, formData)}>정보 확인</Button>
    </div>
  );
};

export default Page;
