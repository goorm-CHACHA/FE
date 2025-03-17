import * as React from 'react';
import { ToggleGroup } from 'radix-ui';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';
import { FieldValues, Path } from 'react-hook-form';

interface ToggleItem {
  value: string;
}

interface RadixToggleGroupProps<T extends FieldValues>
  extends VariantProps<typeof itemsVariants> {
  items: ToggleItem[];
  value: string[];
  ariaLabel: string;
  onChange: (newValue: T[Path<T>]) => void;
}

const itemsVariants = cva(
  'py-1 h-[30px] px-4 flex items-center justify-center rounded-full whitespace-nowrap text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        black:
          'data-[state=on]:bg-green-500 data-[state=on]:text-white bg-neutral-600 text-white border border-black',
      },
    },
    defaultVariants: {
      variant: 'black',
    },
  },
);

const RadixToggleGroup = <T extends FieldValues>({
  items,
  ariaLabel,
  variant,
  value,
  onChange,
}: RadixToggleGroupProps<T>) => (
  <ToggleGroup.Root
    type="multiple"
    aria-label={ariaLabel}
    value={value}
    onValueChange={onChange}
    className="flex flex-wrap gap-2"
  >
    {items.map(({ value: selectedOption }: ToggleItem) => (
      <ToggleGroup.Item
        key={selectedOption}
        className={cn(itemsVariants({ variant }), 'mb-1')}
        value={selectedOption}
      >
        {selectedOption}
      </ToggleGroup.Item>
    ))}
  </ToggleGroup.Root>
);

export default RadixToggleGroup;
