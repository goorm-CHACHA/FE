'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { useState } from 'react';
import { cn } from '~/utils/cn';

const multipleSelectionVariants = cva(
  'p-1 flex items-center justify-center rounded-2xl whitespace-nowrap text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-700 hover:bg-gray-400/40',
        pink: 'bg-pink-400 hover:bg-pink-400/85',
        indigo: 'bg-indigo-500 text-white hover:bg-indigo-500/85',
      },
      changedColor:{
          isClicked: 'opacity-50',
          },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface multipleSelectionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof multipleSelectionVariants> {
  children?: React.ReactNode;
}

const MultipleSelection = ({
  variant,
  changedColor,
  className,
  children,
  ...props
}: multipleSelectionProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const clickHandler  =  (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(`is clicked : ${children}`);
        setIsClicked(!isClicked); 
    }
  return (
    <button
      className={cn(multipleSelectionVariants({ variant, changedColor: isClicked ? 'isClicked' : undefined }), className)}

      {...props}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default MultipleSelection;
