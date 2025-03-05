'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';
import Button from './button';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';
const modalOneBtnVariants = cva(
  'rounded-2xl p-3 break-words  whitespace-pre-line fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black m-auto height-2xl',
  {
    variants: {
      variant: {
        system: 'bg-gray-200 text-black mr-auto rounded-bl-md',
        btn: 'bg-white text-black mx-auto width-2xl height-2xl',
      },
      size: {
        default: 'text-sm pt-16 px-8 pb-6 sm:pt-16 sm:px-16',
        small: 'text-xs p-2',
        large: 'text-base p-4',
      },
    },
    defaultVariants: {
      variant: 'btn',
      size: 'default',
    },
  },
);

interface ModalOneBtnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalOneBtnVariants> {
  textTitle?: string;
  text?: string;
  textBtn?: string;
}

const ModalOneBtn = ({
  variant,
  size,
  className,
  text,
  textTitle,
  textBtn,
  ...props
}: ModalOneBtnProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const btnCloseHandler = () => {
    setIsClicked(true);
    // page 이동
  };
  return (
    !isClicked && (
      <div className={cn(modalOneBtnVariants({ variant, size }))}>
        <div className="absolute top-2 left-0 flex justify-between w-full px-4">
          <p>{textTitle}</p>
          <IoCloseSharp onClick={btnCloseHandler} className="cursor-pointer" />
        </div>
        <p className="mb-10">{text}</p>
        <Button size={'full'} onClick={btnCloseHandler}>{textBtn}</Button>
      </div>
    )
  );
};

export default ModalOneBtn;
