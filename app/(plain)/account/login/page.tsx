'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

import Input from '~/components/common/input';
import Button from '~/components/common/button';
import { loginPayload, loginSchema } from '~/schema/user';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const methods = useForm<loginPayload>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log('폼 제출 데이터:', data);
    router.push('/landing');
  });

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center">
      <div className="w-full md:max-w-md px-6">
        <FormProvider {...methods}>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <Input name="id" placeholder="아이디" />
            <Input name="password" placeholder="비밀번호" type="password" />
            <Button>로그인</Button>
          </form>
        </FormProvider>
        <div className="flex justify-between text-xs mt-8 text-neutral-400">
          <Link href="/register">회원가입</Link>
          <Link href="/account/find-id-pw">아이디﹒비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
