import { cva, VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '~/utils/cn';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  name: string;
  label?: string;
  labelDirection?: 'top' | 'left';
  helperText?: string;
}

// 여러 스타일을 지원하기 위해 cva 사용
const inputVariants = cva(
  'border border-zinc-300 py-2 pl-3 outline-zinc-400 outline-1 rounded-md',
  {
    variants: {
      inputSize: {
        default: '',
        md: 'w-[230px]',
      },
    },
    defaultVariants: {
      inputSize: 'default',
    },
  },
);

const Input = ({
  name,
  label,
  labelDirection = 'top',
  helperText,
  inputSize,
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message?.toString();

  return (
    <div
      className={`
        flex
        ${labelDirection === 'left' ? 'items-center justify-between' : 'flex-col'}`}
    >
      {/* label: top */}
      {label && labelDirection === 'top' && (
        <label htmlFor={name} className="mb-1 font-medium text-sm">
          {label}
        </label>
      )}

      {/* label: left */}
      {label && labelDirection === 'left' && (
        <label htmlFor={name} className="font-medium whitespace-nowrap">
          {label}
        </label>
      )}

      <div className="flex flex-col">
        {helperText && <p className="text-sm text-gray-500">{helperText}</p>}
        <input
          id={name}
          {...register(name)}
          {...props}
          className={cn(
            inputVariants({ inputSize }),
            errors[name] && 'border-red-500',
          )}
          aria-invalid={!!errors[name]}
        />
        {errorMessage && (
          <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Input;
