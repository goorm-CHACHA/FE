interface BadgesAlignedProps {
  items: string[];
  title?: string;
  vertical?: boolean;
  className?: string;
  noneChip?: boolean;
  alignedOne?: boolean;
}

const BadgesAligned = ({
  items,
  title,
  vertical,
  className,
  noneChip,
  alignedOne,
}: BadgesAlignedProps) => {
  const displayItems = alignedOne ? items?.slice(0, 1) : items;

  return (
    <div
      className={`gap-3 flex flex-col bg-[#333333] pb-0.5 rounded-xl ${className}`}
    >
      {title && (
        <div className="text-white text-body-md font-medium"> {title} </div>
      )}
      <div
        className={`flex ${vertical ? 'flex-col' : 'flex-row gap-2'} flex-wrap `}
      >
        {displayItems?.map((item: string, index: number) => (
          <p
            key={index}
            className={`w-fit px-2 text-body-sm rounded-md text-white ${noneChip ? 'bg-transparent py-1 text-gray-neutral-300' : 'bg-gray-neutral-600'}`}
          >
            {item.length > 19 ? `${item.slice(0, 19)}...` : item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BadgesAligned;
