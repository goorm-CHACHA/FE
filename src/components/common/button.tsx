import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/utils/cn';

const buttonVariants = cva(
  'flex items-center justify-center rounded-md font-medium whitespace-nowrap text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-black text-white hover:bg-black/85',
        grey: 'bg-zinc-500 hover:bg-zinc-500/85',
        red: 'bg-red-500 text-white hover:bg-red-500/85',
        outline:
          'border border-black hover:text-zinc-500 hover:border-zinc-500',
        ghost: 'bg-transparent',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'px-3 py-2 text-xs',
        lg: 'px-20 py-3',
        full: 'w-full py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string;
  children?: React.ReactElement;
}

const Button = ({ variant, size, className, text, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
