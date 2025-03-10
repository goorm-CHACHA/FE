'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import Select from 'react-select';

import Input from '~/components/common/input';
import Button from '~/components/common/button';
import { signUpPayload, signUpSchema } from '~/schema/user';
import useFormSubmit from '~/utils/use-form-submit';
import { perposeOptions } from '~/constants/perpose';

const ProfileForm = () => {
  const methods = useForm<signUpPayload>({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur',
  });

  const { control, handleSubmit } = methods;

  const onSubmit = handleSubmit(useFormSubmit('/register/job'));

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
              button={<Button className="h-[42px]">중복 확인</Button>}
            />
            <Input name="email" placeholder="이메일" label="이메일" />
            <Input
              name="password"
              placeholder="비밀번호"
              label="비밀번호"
              type="password"
            />
            {/* <Input
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              label="비밀번호 확인"
              type="password"
            /> */}
            <Controller
              name="perpose"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <p className="mb-1 font-medium text-sm">참여 목적</p>
                  <Select
                    {...field}
                    instanceId="perpose"
                    getOptionValue={(e) => e.value}
                    getOptionLabel={(e) => e.value}
                    options={perposeOptions}
                    isClearable
                  />
                  {fieldState.error && (
                    <p className="text-sm text-red-500 mt-2">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
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
