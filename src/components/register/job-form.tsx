'use client';

import Select, { GroupBase } from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import {
  careerOptions,
  GroupedJobOption,
  groupedJobOptions,
} from '~/constants/job-options';
import Button from '~/components/common/button';
import useFormSubmit from '~/utils/use-form-submit';

const GroupLabel = (group: GroupBase<GroupedJobOption>) => {
  return (
    <div className="border-b pb-2 mb-2">
      <p className="text-base">{group.label}</p>
    </div>
  );
};

export default function JobSelect() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const onSubmit = handleSubmit(useFormSubmit('/register/interest'));

  return (
    <div className="h-full">
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-between h-full"
      >
        <div className="flex flex-col gap-5">
          <Controller
            name="job"
            control={control}
            rules={{ required: '직무/직책을 선택해주세요.' }}
            render={({ field, fieldState }) => (
              <div>
                <p className="mb-1 font-medium text-sm">직무 / 직책</p>
                <Select
                  {...field}
                  instanceId="job-select"
                  options={groupedJobOptions}
                  formatGroupLabel={GroupLabel}
                  getOptionLabel={(e) => e.value}
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
          <Controller
            name="career"
            control={control}
            rules={{ required: '경력을 선택해주세요.' }}
            render={({ field, fieldState }) => (
              <div>
                <p className="mb-1 font-medium text-sm">경력</p>
                <Select
                  {...field}
                  instanceId="career-select"
                  options={careerOptions}
                  getOptionLabel={(e) => e.value}
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
        <Button className="py-3" disabled={!isValid}>
          다음으로
        </Button>
      </form>
    </div>
  );
}
