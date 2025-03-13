import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import { cn } from '~/utils/cn';

const defaultProfileVariants = cva(
  'relative rounded-full overflow-hidden bg-slate-400',
  {
    variants: {
      size: {
        default: 'w-16 h-16', // 매칭 카드, 온라인 명함 저장 될 카드..... 
        notification: 'h-10 w-10',
        profile: 'w-16 h-16',
        profileChat: 'h-[72px] w-[72px]',
        chatImg:'h-8 w-8',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

interface DefaultProfileProps extends React.HTMLAttributes<HTMLDivElement>,
VariantProps<typeof defaultProfileVariants>{
  imgSrc?: string;
}

const DefaultProfile = ({ 
  imgSrc,
  size,
  className
 }: DefaultProfileProps) => {
  return (
    <div
      className={cn(defaultProfileVariants({ size }), className)}
    >
      {imgSrc ? (
        <Image src={imgSrc} alt="프로필 이미지" fill className="object-contain" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-300">
          <span className="text-white text-xs">No Image</span>
        </div>
      )}
    </div>
  );
};

export default DefaultProfile;
