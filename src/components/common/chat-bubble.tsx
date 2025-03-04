import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';

const chatBubbleVariants = cva(
  'rounded-2xl p-3 max-w-[70%] break-words relative',
  {
    variants: {
      variant: {
        sender: 'bg-blue-500 text-white ml-auto rounded-br-md',
        receiver: 'bg-gray-200 text-black mr-auto rounded-bl-md',
        system: 'bg-yellow-100 text-black mx-auto italic',
      },
      size: {
        default: 'text-sm',
        small: 'text-xs p-2',
        large: 'text-base p-4',
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
}

const ChatBubble = ({
  variant,
  size,
  className,
  message,
  ...props
}: ChatBubbleProps) => {
  return (
    <div
      className={cn(
        'relative',
        variant === 'sender' ? 'flex justify-end' : 'flex justify-start',
      )}
    >
      <div
        className={cn(chatBubbleVariants({ variant, size }), className)}
        {...props}
      >
        {message}
      </div>
      {variant === 'sender' && (
        <div
          className="absolute bottom-0 right-0 w-0 h-0 translate-y-2
    border-t-[15px] border-t-blue-500 
    border-l-[15px] border-l-transparent"
        ></div>
      )}
      {variant === 'receiver' && (
        <div
          className="absolute bottom-0 left-0 w-0 h-0 translate-y-2
    border-t-[15px] border-t-gray-200 
    border-r-[15px] border-r-transparent"
        ></div>
      )}
    </div>
  );
};

export default ChatBubble;
