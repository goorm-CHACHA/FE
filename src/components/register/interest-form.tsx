'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { interestOptions } from '~/constants/interest';
import Button from '../common/button';
import useFormSubmit from '~/utils/use-form-submit';
import ToggleField from './toggle-field';

const InterestForm = () => {
  const MIN_SELECTION = 1; // 최소 선택 개수
  const MAX_SELECTION = 2; // 최대 선택 개수

  const methods = useForm<{
    interest: string[];
  }>({
    defaultValues: {
      interest: [],
    },
    mode: 'onChange',
  });

  const { control, handleSubmit, watch } = methods;

  const onSubmit = handleSubmit(useFormSubmit('/'));
  const selectedOptions = watch('interest');

  return (
    <FormProvider {...methods}>
      <div className="h-full">
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-between h-full"
        >
          <ToggleField
            name="interest"
            control={control}
            options={interestOptions}
            minSelection={MIN_SELECTION}
            maxSelection={MAX_SELECTION}
          />
          <Button
            className="py-3"
            disabled={selectedOptions.length < MIN_SELECTION}
          >
            사전등록 완료!
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};

export default InterestForm;
