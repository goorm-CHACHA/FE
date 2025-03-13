import * as Tabs from '@radix-ui/react-tabs';
import React, { useEffect, useRef, useState } from 'react';

interface RadixTabsProps {
  tabLabels: string[];
  tabContents: React.ReactNode[];
  disabled?: boolean;
}

const RadixTabs = ({ tabLabels, tabContents, disabled }: RadixTabsProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const updateIndicator = () => {
    if (listRef.current) {
      const activeTrigger = listRef.current.querySelector(
        '[data-state="active"]',
      ) as HTMLElement;
      if (activeTrigger) {
        setIndicatorStyle({
          left: activeTrigger.offsetLeft,
          width: activeTrigger.offsetWidth,
        });
      }
    }
  };

  useEffect(() => {
    updateIndicator();
  }, [tabLabels]);

  return (
    <Tabs.Root
      className="flex flex-col w-screen"
      defaultValue={tabLabels[0]}
      onValueChange={updateIndicator}
    >
      <div className="relative">
        <Tabs.List
          ref={listRef}
          className="flex rounded-lg justify-start"
          aria-label="탭 목록"
        >
          {tabLabels.map((label, index) => (
            <Tabs.Trigger
              key={`trigger-${index}`}
              className="flex h-[45px] cursor-pointer select-none items-center justify-center px-5 text-sm text-zinc-700 outline-none data-[state=active]:text-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              value={label}
              disabled={disabled}
            >
              {label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {/* 인디케이터 영역 */}
        <div
          className="absolute bottom-0 h-1 bg-green-700 transition-all duration-300"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
      </div>
      <div className="h-[1px] w-full bg-zinc-700"></div>
      {tabLabels.map((label, index) => (
        <Tabs.Content
          key={`content-${index}`}
          className="grow rounded-b-md p-5 outline-none"
          value={label}
        >
          {tabContents[index]}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default RadixTabs;
