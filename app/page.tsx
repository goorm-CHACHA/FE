'use client';

import { useRouter } from 'next/navigation';
import Button from '~/components/common/button';
import LoginForm from '~/components/login-form';

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 min-h-screen px-6 justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default Page;
