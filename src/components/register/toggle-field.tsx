import {
  Control,
  Controller,
  FieldValues,
  Path,
  useFormContext,
} from 'react-hook-form';
import RadixToggleGroup from '../common/radix-toggle-group';

interface ToggleFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: { category?: string; value: string }[];
  label?: string;
  rules?: string;
  minSelection?: number;
  maxSelection?: number;
}

const ToggleField = <T extends FieldValues>({
  name,
  control,
  options,
  label,
  minSelection = 1,
  maxSelection = 1,
}: ToggleFieldProps<T>) => {
  const { setError, setValue } = useFormContext();

  return (
    <div className="mb-8">
      <div className="flex gap-3 content-center">
        <div className="w-6 h-6 border border-dashed border-[#02e473]" />
        <p className="mb-4 font-bold text-body-lg text-gray-neutral-50">
          {label}
        </p>
      </div>
      <Controller
        name={name}
        control={control}
        rules={{
          validate: (value: string[]) => {
            if (value.length < minSelection) {
              return `최소 ${minSelection}개 이상 선택해야 합니다.`;
            }
            if (value.length > maxSelection) {
              return `최대 ${maxSelection}개까지 선택 가능 합니다.`;
            }
            return true;
          },
        }}
        render={({ field: { value }, fieldState: { error } }) => {
          const handleValueChange = (newValue: T[typeof name]) => {
            let selectedValue: T[typeof name];

            // 단일 선택
            if (maxSelection === 1) {
              const lastSelected = newValue.pop();
              selectedValue = (
                lastSelected ? [lastSelected] : []
              ) as T[typeof name];
            } else {
              // 다중 선택
              if (newValue.length < minSelection) {
                setError(name, {
                  type: 'manual',
                  message: `최소 ${minSelection}개 이상 선택해야 합니다.`,
                });
              } else if (newValue.length > maxSelection) {
                setError(name, {
                  type: 'manual',
                  message: `최대 ${maxSelection}개까지 선택 가능 합니다.`,
                });
                return;
              }
              selectedValue = newValue;
            }

            setValue(name, selectedValue, { shouldValidate: true });
          };

          return (
            <>
              <RadixToggleGroup
                items={options}
                value={value}
                onChange={handleValueChange}
                ariaLabel={`${label} 옵션`}
                variant={'primary'}
              />
              {error && (
                <p className="text-red-500 text-sm mt-2">{error.message}</p>
              )}
            </>
          );
        }}
      />
    </div>
  );
};

export default ToggleField;
