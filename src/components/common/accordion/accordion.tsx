import * as React from 'react';
import classNames from 'classnames';
import './style.css';
import * as Accordion from '@radix-ui/react-accordion';

interface AccordionProps {
  className?: string;
  children?: React.ReactNode;
}
const Accordions = ({ className, children }: AccordionProps) => (
  <Accordion.Root
    className={`md:w-full rounded-2xl bg-mauve6 shadow-[0_2px_10px] shadow-black/5 ${className}`}
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {children}
  </Accordion.Root>
);

interface AccordionItemProps {
  className?: string;
  children?: React.ReactNode;
  value: string;
}

const AccordionItem = ({ className, children, value }: AccordionItemProps) => (
  <Accordion.Item
    className={classNames(
      'mt-px overflow-hidden p-spacing-20 box-border text-left text-base bg-[color:var(--primitive-color-gray-warm-800)] bg-[#222222] text-white font-body1-normal-16 first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-mauve12',
      className,
    )}
    value={value}
  >
    {children}
  </Accordion.Item>
);
AccordionItem.displayName = 'AccordionItem';

interface AccordionTriggerProps {
  className?: string;
  children?: string | React.ReactNode;
}

const AccordionTrigger = ({
  children,
  className,
  ...props
}: AccordionTriggerProps) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        'h-20 group flex flex-1 cursor-default items-center justify-between bg-[#222222] px-5 text-[15px] leading-none text-white shadow-[0_1px_0] shadow-mauve6 outline-none',
        className,
      )}
      {...props}
    >
      {children}
      <p
        className="text-white transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        aria-hidden
      >
        ^
      </p>
    </Accordion.Trigger>
  </Accordion.Header>
);
AccordionTrigger.displayName = 'AccordionTrigger';

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof Accordion.Content> {
  className?: string;
  children?: React.ReactNode | string;
}
const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      'overflow-hidden bg-[#222222] text-[15px] data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
      className,
      'AccordionContent',
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="px-5 py-[15px]">{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = 'AccordionContent';

export { Accordions, AccordionContent, AccordionItem, AccordionTrigger };