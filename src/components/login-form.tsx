'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

import axios from 'axios';
import Link from 'next/link';

import Input from '~/components/common/input';
import Button from '~/components/common/button';
import { loginPayload, loginSchema } from '~/schema/user';

const LoginForm = () => {
  const methods = useForm<loginPayload>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      const res = await axios.post('/api/users/login', {
        username: data.id,
        password: data.password,
      });

      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
    } catch {
      methods.setError('password', {
        type: 'manual',
        message: '아이디 또는 비밀번호를 확인하세요.',
      });
    }
  });

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-full max-w-3xl">
        <FormProvider {...methods}>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <Input name="id" placeholder="아이디" />
            <Input name="password" placeholder="비밀번호" type="password" />
            <Button type="submit">로그인</Button>
          </form>
        </FormProvider>
        <div className="text-right text-xs mt-4 mb-8 text-neutral-400">
          <Link href="/account/find-id-pw">아이디﹒비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
