import { Dialog } from 'radix-ui';
import { useState } from 'react';
import Button from './button';

interface BaseButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'gray-700' | 'red' | 'black/50';
}

interface TriggerButtonProps extends BaseButtonProps {
  actionType: 'trigger';
  nextModalContent: ModalContent;
}

interface ActionButtonProps extends BaseButtonProps {
  actionType?: 'action';
  onClick?: () => void;
}

export type ButtonProps = TriggerButtonProps | ActionButtonProps;

interface ModalContent {
  title?: string;
  subText?: string;
  buttons: ButtonProps[];
}

interface ModalProps extends ModalContent {
  triggerButtonLabel: string;
  triggerButtonVariant?:
    | 'primary'
    | 'secondary'
    | 'gray-700'
    | 'red'
    | 'black/50';
}

const Modal = ({
  title,
  subText,
  buttons,
  triggerButtonLabel,
  triggerButtonVariant,
}: ModalProps) => {
  const initialModal = { title, subText, buttons };
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState<ModalContent>({
    title,
    subText,
    buttons,
  });

  const handleModalContent = (newModal: ModalContent) => {
    setCurrentModal({
      ...newModal,
      buttons: [...newModal.buttons],
    });
  };

  return (
    <>
      <Dialog.Root
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) setCurrentModal(initialModal);
        }}
      >
        <Dialog.Trigger asChild>
          <Button variant={triggerButtonVariant}>{triggerButtonLabel}</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
          <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#373734] p-3.5 shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="text-white text-[15px] font-semibold text-left">
              {currentModal.title}
            </Dialog.Title>
            <Dialog.Description className="text-[#b0b0b0] text-[13px] text-left whitespace-pre-line">
              {currentModal.subText}
            </Dialog.Description>
            <div className="relative w-full text-center mt-4 flex gap-1.5">
              {currentModal.buttons.map((btn, index) => {
                if (btn.actionType === 'trigger') {
                  return (
                    <Button
                      key={index}
                      variant={btn.variant}
                      onClick={() => handleModalContent(btn.nextModalContent)}
                    >
                      {btn.label}
                    </Button>
                  );
                }

                return (
                  <Dialog.Close asChild key={index}>
                    <Button onClick={btn.onClick} variant={btn.variant}>
                      {btn.label}
                    </Button>
                  </Dialog.Close>
                );
              })}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default Modal;
