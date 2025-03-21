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

  const { handleSubmit, setValue } = methods;

  const onSubmit = handleSubmit(useFormSubmit('/register/job'));

  const phoneFormatter = (value: string) => {
    const number = value.replace(/\D/g, '');

    if (number.length < 4) return number;
    if (number.length < 8) return `${number.slice(0, 3)}-${number.slice(3)}`;
    return `${number.slice(0, 3)}-${number.slice(3, 7)}-${number.slice(7)}`;
  };

  return (
    <div className="h-full">
      <FormProvider {...methods}>
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-between h-full"
        >
          <div className="flex flex-col gap-5">
            <Input name="name" placeholder="이름" label="이름" />
            <Input
              name="id"
              placeholder="아이디"
              label="아이디"
              button={
                <Button className="h-[42px]" size="md" type="button">
                  중복 확인
                </Button>
              }
            />
            <Input
              name="password"
              placeholder="비밀번호"
              label="비밀번호"
              type="password"
              subLabel="8~20자의 영문, 숫자 및 특수문자(!@#$%^&*) 조합"
            />
            <Input name="email" placeholder="이메일" label="이메일" />
            <Input
              name="phone"
              placeholder="휴대폰 번호"
              label="휴대폰 번호"
              maxLength={13}
              onChange={(e) =>
                setValue('phone', phoneFormatter(e.target.value))
              }
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
