import { useFormContext } from 'react-hook-form';
import { InputHTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';

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
  button?: ReactNode;
}

const Input = ({ name, label, button, inputSize, ...props }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message?.toString();

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={name}
          className="mb-1 font-medium text-sm text-neutral-400"
        >
          {label}
        </label>
      )}

      <div className="flex items-center gap-2">
        <input
          id={name}
          {...register(name)}
          {...props}
          className={cn(
            inputVariants({ inputSize }),
            'flex-1',
            errors[name] && 'border-red-500',
          )}
          aria-invalid={!!errors[name]}
        />
        {button}
      </div>

      {errorMessage && (
        <p className="text-red-400 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
