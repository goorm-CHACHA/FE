
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';

const DefaultProfileVariants = cva(
  'rounded-2xl p-4 max-w-[70%] break-words relative',
  {
    variants: {
      variant: {
        default: 'bg-slate-400 w-16 h-16 rounded-full relative object-cover',
      }, 
      size: {
        default: 'text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface DefaultProfileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof DefaultProfileVariants> {
  imgSrc?: string;
  }

const DefaultProfile = ({
  variant,
  size,
  className,
  imgSrc,
  ...props
}: DefaultProfileProps) => {
  return (
    <div 
    className={cn(DefaultProfileVariants({ variant, size }), className,)}
    {...props}>
        <img src={imgSrc} alt="프로필 이미지" className="absolute top-0 left-0 w-full h-full object-fit rounded-full"/>
    </div>
  );
};

export default DefaultProfile;