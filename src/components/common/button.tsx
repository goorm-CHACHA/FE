import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';

// className=""

const buttonVariants = cva(
  'flex justify-center items-center relative rounded-md text-body-md font-semibold disabled:bg-neutral-400 disabled:text-white',
  {
    variants: {
      variant: {
        primary: 'bg-green-500 text-left text-white',
        secondary: 'bg-green-100 text-green-600',
        'gray-700': 'bg-gray-700 text-white',
        red: 'bg-red-500 text-white',
        'black/50': 'bg-black/50 text-white',
      },
      size: {
        default: 'w-full h-[40px]',
        sm: 'py-[6px] px-[10px] text-[13px]',
        md: 'py-[10px] px-[16px] text-[14px]',
        lg: 'py-[14px] px-[28px] text-[16px]',
        full: 'w-full h-[50px] text-[16px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

const Button = ({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
