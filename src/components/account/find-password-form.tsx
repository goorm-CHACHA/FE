'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

import Input from '~/components/common/input';
import Button from '~/components/common/button';
import { findPasswordPayload, findPasswordSchema } from '~/schema/user';

const FindPasswordForm = () => {
  const methods = useForm<findPasswordPayload>({
    resolver: zodResolver(findPasswordSchema),
    mode: 'onSubmit',
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log('폼 제출 데이터:', data);
  });

  return (
    <div className="pt-6">
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <Input name="id" placeholder="아이디" label="아이디" />
          <Input name="이메일" placeholder="이메일" label="이메일" />
          <Button className="py-3">비밀번호 찾기</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default FindPasswordForm;
