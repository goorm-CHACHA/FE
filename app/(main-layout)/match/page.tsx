'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '~/components/common/button';

const MatchTypePage = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen px-6 justify-center items-center flex-col gap-2">
      <Button
        size={'full'}
        onClick={() => {
          router.push('/match/one-to-one');
        }}
      >
        1:1 네트워킹
      </Button>
      <Button
        size={'full'}
        onClick={() => {
          router.push('/match/group');
        }}
      >
        그룹 네트워킹
      </Button>
    </div>
  );
};

export default MatchTypePage;
