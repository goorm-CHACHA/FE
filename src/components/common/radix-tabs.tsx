import * as Tabs from '@radix-ui/react-tabs';

interface RadixTabsProps {
  tabLabels: string[];
  tabContents: React.ReactNode[];
  disabled?: boolean;
}

const RadixTabs: React.FC<RadixTabsProps> = ({
  tabLabels,
  tabContents,
  disabled,
}) => {
  return (
    <Tabs.Root className="flex flex-col" defaultValue={tabLabels[0]}>
      <Tabs.List className="flex bg-zinc-200 rounded-lg" aria-label="탭 목록">
        {tabLabels.map((label, index) => (
          <Tabs.Trigger
            key={`trigger-${index}`}
            className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center px-5 text-sm text-zinc-400 outline-none data-[state=active]:bg-black data-[state=active]:rounded-lg data-[state=active]:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            value={label}
            disabled={disabled}
          >
            {label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabLabels.map((label, index) => (
        <Tabs.Content
          key={`content-${index}`}
          className="grow rounded-b-md bg-white p-5 outline-none"
          value={label}
        >
          {tabContents[index]}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default RadixTabs;
