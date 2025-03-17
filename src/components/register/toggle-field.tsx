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
    <div>
      <p className="mb-1 font-medium text-sm text-gray-200">{label}</p>
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

            setValue(name, newValue, { shouldValidate: true });
          };

          return (
            <>
              <RadixToggleGroup
                items={options}
                value={value}
                onChange={handleValueChange}
                ariaLabel={`${label} 옵션`}
                variant={'black'}
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
