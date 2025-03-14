interface BadgesAlignedProps {
  items: string[];
  title?: string;
  vertical?: boolean;
  className?: string;
  noneChip?: boolean;
}

const BadgesAligned = ({
  items,
  title,
  vertical,
  className,
  noneChip,
}: BadgesAlignedProps) => {
  return (
    <div
      className={`gap-3 flex flex-col bg-[#333333] py-0.5 rounded-xl mt-2 ${className}`}
    >
      {title && <div className="text-white font-medium"> {title} </div>}
      <div
        className={`flex ${vertical ? 'flex-col' : 'flex-row'} flex-wrap gap-2`}
      >
        {items?.map((item: string, index: number) => (
          <p
            key={index}
            className={`w-fit px-2 py-1 rounded-md text-white ${noneChip ? 'bg-transparent py-1 text-sm' : 'bg-[#07ca7f] text-xs'}`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BadgesAligned;
