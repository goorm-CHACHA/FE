'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

import Input from '~/components/common/input';
import Button from '~/components/common/button';
import { loginPayload, loginSchema } from '~/schema/user';
import Link from 'next/link';

const Page = () => {
  const methods = useForm<loginPayload>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log('폼 제출 데이터:', data);
  });

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center">
      <div className="w-full md:max-w-md px-6">
        <FormProvider {...methods}>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <Input name="id" placeholder="아이디" />
            <Input name="password" placeholder="비밀번호" type="password" />
            <Button className="py-3">로그인</Button>
          </form>
        </FormProvider>
        <div className="flex justify-evenly text-sm mt-8 text-gray-600">
          <Link href="/account/find-id">아이디 찾기</Link>
          <span className="text-gray-200">|</span>
          <Link href="/account/find-pw">비밀번호 찾기</Link>
          <span className="text-gray-200">|</span>
          <Link href="/account/register">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
