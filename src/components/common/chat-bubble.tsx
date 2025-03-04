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
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-500 transform translate-x-1/2 translate-y-1/2 rotate-45"></div>
      )}
      {variant === 'receiver' && (
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-gray-200 transform -translate-x-1/2 translate-y-1/2 rotate-45"></div>
      )}
    </div>
  );
};

export default ChatBubble;
