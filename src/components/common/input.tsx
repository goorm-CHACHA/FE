import { cva, VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '~/utils/cn';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  name: string;
  label?: string;
  helperText?: string;
}

// input의 경우 스타일이 여러개 일 것 같아 cva 사용 (아이콘 있는 input, 길이가 짧은 input 등)
const inputVariants = cva(
  'border border-zinc-300 py-2 pl-3 outline-zinc-400 outline-1 rounded-md',
);

const Input = ({ name, label, helperText, ...props }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message?.toString();

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="mb-1 font-medium">
          {label}
        </label>
      )}
      {helperText && <p className="text-sm text-gray-500">{helperText}</p>}
      <input
        id={name}
        {...register(name)}
        {...props}
        className={cn(inputVariants(), errors[name] && 'border-red-500')}
        aria-invalid={!!errors[name]}
      />
      {errorMessage && (
        <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
