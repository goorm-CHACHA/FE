import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';
import Image from 'next/image';

interface DefaultProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc?: string;
}

const DefaultProfile = ({
  className,
  imgSrc,
  ...props
}: DefaultProfileProps) => {
  return (
    <div
      className="bg-slate-400 w-16 h-16 rounded-full relative object-cover"
      {...props}
    >
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt="프로필 이미지"
          className="absolute top-0 left-0 w-full h-full object-fit rounded-full"
        />
      ) : (
        <div className="w-full h-full flex rounded-full items-center justify-center bg-gray-300">
          <span className="text-white text-xs">No Image</span>
        </div>
      )}
    </div>
  );
};

export default DefaultProfile;
