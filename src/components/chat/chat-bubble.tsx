import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';
import DefaultProfile from '~/components/common/default-profile';

const chatBubbleVariants = cva(
  'break-words whitespace-normal relative max-w-[220px] w-fit min-h-[43px]',
  {
    variants: {
      variant: {
        sender:
          'bg-[#555555] ml-auto rounded-tl-[8px] rounded-br-[8px] rounded-bl-[8px] px-4 py-2.5 text-white',
        receiver:
          'bg-[#1f1f1f] mr-auto rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] px-4 py-2.5 text-white',
        system: 'bg-yellow-100 text-black mx-auto italic rounded-lg',
      },
      size: {
        default: 'text-sm px-4 py-2 gap-1',
        small: 'text-xs px-3 py-1',
        large: 'text-base px-5 py-3',
      },
    },
    defaultVariants: {
      variant: 'receiver',
      size: 'default',
    },
  },
);

interface ChatBubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleVariants> {
  message: string;
  showProfile?: boolean;
  imgSrc?: string;
}

const ChatBubble = ({
  variant,
  size,
  className,
  message,
  showProfile = false,
  imgSrc,
  ...props
}: ChatBubbleProps) => {
  return (
    <div
      className={cn(
        'mb-2 flex gap-2 items-start', // 상단 정렬
        variant === 'sender' ? 'justify-end' : 'justify-start',
      )}
    >
      {variant === 'receiver' && showProfile && imgSrc && (
        <DefaultProfile size="xs" imgSrc={imgSrc} />
      )}
      <div
        className={cn(chatBubbleVariants({ variant, size }), className)}
        {...props}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
