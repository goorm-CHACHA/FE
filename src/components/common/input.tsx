'use client';

import { useFormContext } from 'react-hook-form';
import { InputHTMLAttributes, ReactNode, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';
import Image from 'next/image';
const inputVariants = cva(
  'border-none py-2 pl-3 outline-none outline-1 rounded-md bg-neutral-700 text-neutral-400',
  {
    variants: {
      inputSize: {
        default: '',
        md: 'w-[230px]',
        full: 'w-full',
      },
    },
    defaultVariants: {
      inputSize: 'default',
    },
  },
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  name: string;
  label?: string;
  type?: string;
  button?: ReactNode;
  className?: string;
  subLabel?: string;
}

const Input = ({
  name,
  label,
  button,
  inputSize,
  className,
  type,
  subLabel,
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message?.toString();
  const [inputType, setInputType] = useState(type);
  const toggleType = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={name}
          className={`mb-1 font-medium text-sm text-neutral-400 ${className}`}
        >
          {label}
        </label>
      )}

      <div className="flex items-center gap-2 relative">
        <input
          id={name}
          type={inputType}
          {...register(name)}
          {...props}
          className={cn(
            inputVariants({ inputSize }),
            'flex-1',
            className, // 전달받은 className을 병합
            errors[name] && 'border-red-500',
          )}
          aria-invalid={!!errors[name]}
        />
        {button}
        {type === 'password' && (
          <button
            className="absolute right-3"
            onClick={toggleType}
            type="button"
          >
            {inputType === 'password' ? (
              <Image
                className="opacity-60"
                src="/assets/svgs/eye.svg"
                alt="비밀번호 보기"
                width={24}
                height={24}
              />
            ) : (
              <Image
                className="opacity-60"
                src="/assets/svgs/eye-off.svg"
                alt="비밀번호 숨김"
                width={24}
                height={24}
              />
            )}
          </button>
        )}
      </div>
      {subLabel && <p className="text-xs text-neutral-500 mt-1">{subLabel}</p>}

      {errorMessage && (
        <p className="text-red-400 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
