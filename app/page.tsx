'use client';

import { useRouter } from 'next/navigation';
import Button from '~/components/common/button';
import { useFormStore } from '~/stores/use-form-store';
import { QRCodeSVG } from 'qrcode.react';
import LoginForm from '~/components/login-form';

const Page = () => {
  const router = useRouter();
  const { qrData } = useFormStore();

  return (
    <div className="flex flex-col gap-4 min-h-screen px-6 justify-center items-center">
      {Object.keys(qrData).length !== 0 ? (
        <>
          <QRCodeSVG value={JSON.stringify(qrData)} />
          <Button
            size={'full'}
            onClick={() => {
              router.push('/home');
            }}
          >
            네트워킹존 입장하기
          </Button>
        </>
      ) : (
        <>
          <LoginForm />
          <Button
            size={'full'}
            variant={'secondary'}
            onClick={() => {
              router.push('/register');
            }}
          >
            현장등록하기
          </Button>
        </>
      )}
    </div>
  );
};

export default Page;
