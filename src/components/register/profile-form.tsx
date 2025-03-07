'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

import Input from '~/components/common/input';
import Button from '~/components/common/button';
import { signUpPayload, signUpSchema } from '~/schema/user';
import useFormSubmit from '~/utils/use-form-submit';

const ProfileForm = () => {
  const methods = useForm<signUpPayload>({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur',
  });

  const onSubmit = methods.handleSubmit(useFormSubmit('/register/job'));

  return (
    <div className="h-full">
      <FormProvider {...methods}>
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-between h-full"
        >
          <div className="flex flex-col gap-5">
            <Input name="name" placeholder="이름" label="이름" />
            <Input name="id" placeholder="아이디" label="아이디" />
            <Input name="email" placeholder="이메일" label="이메일" />
            <Input
              name="password"
              placeholder="비밀번호"
              label="비밀번호"
              type="password"
            />
            <Input
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              label="비밀번호 확인"
              type="password"
            />
          </div>
          <Button className="py-3" disabled={!methods.formState.isValid}>
            다음으로
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ProfileForm;
