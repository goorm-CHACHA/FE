import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';

const roundBadgeVariants = cva(
  'rounded-full flex justify-center items-center text-sm',
  {
    variants: {
      variant: {
        black: 'bg-black text-white',
        gray: 'bg-zinc-200 text-zinc-500',
        outline: 'bg-white text-black border-1 border-black',
      },
      size: {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
      },
    },
    defaultVariants: {
      variant: 'black',
      size: 'sm',
    },
  },
);

interface roundBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof roundBadgeVariants> {
  children?: React.ReactNode;
}

const RoundBadge = ({
  className,
  variant,
  size,
  children,
  ...props
}: roundBadgeProps) => {
  return (
    <div
      className={cn(roundBadgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default RoundBadge;
