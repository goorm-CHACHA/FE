import React, { useEffect, useRef, useState } from 'react';

interface NotifyBarProps {
  id: number;
  type: '1:1' | 'group';
}

const NotifyBar = ({ id, type }: NotifyBarProps) => {
  const [selectedType, setSelectedType] = useState<'1:1' | 'group'>(type);

  const ref1to1 = useRef<HTMLDivElement | null>(null);
  const refGroup = useRef<HTMLDivElement | null>(null);

  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    if (selectedType === '1:1' && ref1to1.current) {
      setIndicatorStyle({
        left: ref1to1.current.offsetLeft,
        width: ref1to1.current.offsetWidth,
      });
    } else if (selectedType === 'group' && refGroup.current) {
      setIndicatorStyle({
        left: refGroup.current.offsetLeft,
        width: refGroup.current.offsetWidth,
      });
    }
  }, [selectedType]);

  return (
    <div
      key={id}
      className="flex items-center justify-left gap-4 pt-4 mb-3 border border-transparent border-b-gray-400 relative"
    >
      <div ref={ref1to1} className="px-4">
        <p
          className={`text-lg cursor-pointer ${selectedType === '1:1' ? 'active font-semibold text-green-700' : ' font-semibold text-white'}`}
          onClick={() => setSelectedType('1:1')}
        >
          1:1
        </p>
      </div>
      <div ref={refGroup} className="px-4">
        <p
          className={`text-lg cursor-pointer ${selectedType === 'group' ? 'active font-semibold text-green-700' : ' font-semibold text-white'}`}
          onClick={() => setSelectedType('group')}
        >
          그룹
        </p>
      </div>

      <div
        className={`absolute bottom-0 h-[4px] bg-green-600 transition-all duration-300 ease-in-out`}
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
        }}
      />
    </div>
  );
};

// const NotifyItem = () => {
//     return(
//         <div>

//         </div>
//     )
// }

export default NotifyBar;
