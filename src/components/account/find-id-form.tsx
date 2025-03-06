'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

import Input from '~/components/common/input';
import Button from '~/components/common/button';
import { findIdPayload, findIdSchema } from '~/schema/user';

const FindIdForm = () => {
  const methods = useForm<findIdPayload>({
    resolver: zodResolver(findIdSchema),
    mode: 'onSubmit',
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log('폼 제출 데이터:', data);
  });

  return (
    <div className="pt-6">
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <Input name="name" placeholder="이름" label="이름" />
          <Input name="email" placeholder="이메일" label="이메일" />
          <Button className="py-3">아이디 찾기</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default FindIdForm;
