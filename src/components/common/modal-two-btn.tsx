import { Dialog } from 'radix-ui';
import React from 'react';
import Button from './button';

interface ModalTwoBtnProps {
  text?: string;
  textLBtn?: string;
  textRBtn?: string;
}

const ModalTwoBtnR = ({ text, textLBtn, textRBtn }: ModalTwoBtnProps) => {
  const clickHandler = () => {
    console.log('btn클릭됨');
    // page 이동
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>모달 2버튼</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] text-slate-700 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title />
          <Dialog.Description />
          <div className="relative w-full text-center">
            <p className="mb-10">{text}</p>
            <Dialog.Close asChild>
              <div className="flex gap-2">
                <Button size={'full'} onClick={clickHandler}>
                  {textLBtn}
                </Button>
                <Button size={'full'} onClick={clickHandler}>
                  {textRBtn}
                </Button>
              </div>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalTwoBtnR;
