import Image from 'next/image';
import { Separator } from 'radix-ui';

const Filter = () => {
  return (
    <div className="flex items-center gap-[2px] w-full pb-2 h-[38px] gray-200">
      <div>필터</div>
      <Image
        src="/assets/svgs/filter.svg"
        alt="filter icon"
        width={16}
        height={16}
      />
      <Separator.Root
        className="mx-2 bg-gray-800 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[1.4px]"
        decorative
        orientation="vertical"
      />
    </div>
  );
};

export default Filter;
