'use client';

import { Controller, useForm } from 'react-hook-form';
import { interestOptions } from '~/constants/interest';
import RadixToggleGroup from '../common/radix-toggle-group';
import Button from '../common/button';
import useFormSubmit from '~/utils/use-form-submit';

const InterestForm = () => {
  const MIN_SELECTION = 1; // 최소 선택 개수
  const MAX_SELECTION = 3; // 최대 선택 개수

  const MESSAGE = {
    MIN_ERROR: `최소 ${MIN_SELECTION}개 이상 선택해야 합니다.`,
    MAX_ERROR: `최대 ${MAX_SELECTION}개까지 선택 가능 합니다.`,
  };

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<{ interest: string[] }>({
    defaultValues: {
      interest: [],
    },
    mode: 'onChange',
  });

  const onSubmit = handleSubmit(useFormSubmit('/'));

  // 선택하지 않거나 3개 이상 선택할 경우 방지
  const handleValueChange = (newValue: string[]) => {
    clearErrors('interest');

    if (newValue.length < MIN_SELECTION) {
      setError('interest', {
        type: 'manual',
        message: `${MESSAGE.MIN_ERROR}`,
      });
    } else if (newValue.length > MAX_SELECTION) {
      setError('interest', {
        type: 'manual',
        message: `${MESSAGE.MAX_ERROR}`,
      });
      return;
    } else {
      clearErrors('interest');
    }

    setValue('interest', newValue, { shouldValidate: true });
  };

  return (
    <div className="h-full">
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-between h-full"
      >
        <div>
          <Controller
            name="interest"
            control={control}
            rules={{
              validate: (value) => {
                if (value.length < MIN_SELECTION) {
                  return MESSAGE.MIN_ERROR;
                }
                if (value.length > MAX_SELECTION) {
                  return MESSAGE.MAX_ERROR;
                }
                return true;
              },
            }}
            render={({ field }) => (
              <RadixToggleGroup
                items={interestOptions}
                value={field.value}
                onChange={handleValueChange}
                ariaLabel="interest option"
                variant={'black'}
              />
            )}
          />

          {errors.interest && (
            <p className="text-red-500 text-sm mt-2">
              {errors.interest.message as string}
            </p>
          )}
        </div>

        <Button className="py-3" disabled={!isValid}>
          사전등록 완료!
        </Button>
      </form>
    </div>
  );
};

export default InterestForm;
