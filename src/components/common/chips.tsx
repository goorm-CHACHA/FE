'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { useState } from 'react';
import { cn } from '~/utils/cn';

const chipsVariants = cva(
  'py-1 px-4 flex items-center justify-center rounded-2xl whitespace-nowrap text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-700 hover:bg-gray-400/40',
        pink: 'bg-pink-400 hover:bg-pink-400/85',
        indigo: 'bg-indigo-500 text-white hover:bg-indigo-500/85',
      },
      changedColor: {
        isClicked: 'opacity-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface chipsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chipsVariants> {
  children?: React.ReactNode;
}

const Chips = ({ variant, className, children, ...props }: chipsProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    console.log(`is clicked : ${children}`);
    setIsClicked(!isClicked);
  };
  return (
    <button
      className={cn(
        chipsVariants({
          variant,
          changedColor: isClicked ? 'isClicked' : undefined,
        }),
        className,
      )}
      {...props}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Chips;
