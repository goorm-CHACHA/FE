import Image from 'next/image';

interface DefaultProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc?: string;
}

const DefaultProfile = ({ imgSrc, ...props }: DefaultProfileProps) => {
  return (
    <div
      className="rounded-full overflow-hidden relative bg-slate-400 min-w-16 min-h-16 aspect-square"
      {...props}
    >
      {imgSrc ? (
        <Image src={imgSrc} alt="프로필 이미지" fill className="object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-300">
          <span className="text-white text-xs">No Image</span>
        </div>
      )}
    </div>
  );
};

export default DefaultProfile;
