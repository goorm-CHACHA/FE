'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';
import Button from './button';
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
const modalTwoBtnVariants = cva(
  'rounded-2xl p-3 break-words whitespace-pre-line fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black m-auto height-2xl',
    {
      variants: {
        variant: {
          system: 'bg-gray-200 text-black mr-auto rounded-bl-md',
          btn: 'bg-white text-black mx-auto width-2xl height-2xl',
        },
        size: {
          default: 'text-sm pt-16 px-14 pb-6 sm:pt-16 sm:px-16',
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

  interface ModalTwoBtnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalTwoBtnVariants> {
  textTitle?: string;
  text?:string;
  textLBtn?: string;
  textRBtn?: string;
}

const ModalTwoBtn = ({
  variant,
  size,
  className,
  text,
  textTitle,
  textLBtn,
  textRBtn,
  ...props
}: ModalTwoBtnProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const btnCloseHandler = () => {
    setIsClicked(true);
    // page 이동 
  } 
  return (
    !isClicked &&
      <div className={cn(modalTwoBtnVariants({variant, size}))}>
      <div className="absolute top-2 left-0 flex justify-between w-full px-4">
        <p>{textTitle}</p>
        <IoCloseSharp onClick={btnCloseHandler} className='cursor-pointer'/>
      </div>
      <p className="mb-10 text-center">{text}</p>
      <div className='flex justify-between gap-5'>
        <Button text={textLBtn} size={'sm'} onClick={btnCloseHandler}/>
        <Button text={textRBtn} size={'sm'} onClick={btnCloseHandler}/>
      </div>
    </div>
  );
};

export default ModalTwoBtn;
