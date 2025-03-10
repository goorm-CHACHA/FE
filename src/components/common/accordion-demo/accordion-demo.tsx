import * as React from "react";
import classNames from "classnames";
import "./style.css"
import * as Accordion from '@radix-ui/react-accordion'; 

interface AccordionDemoProps{
	className?: string;
	children?: React.ReactNode;
};
const AccordionDemo = ({className, children}: AccordionDemoProps) => (
	<Accordion.Root
		className={`w-[300px] rounded-md bg-mauve6 shadow-[0_2px_10px] shadow-black/5 ${className}` } 
		type="single"
		defaultValue="item-1"
		collapsible
	>
		{children}
	</Accordion.Root>
);

interface AccordionItemProps{
	className?: string;
	children?: React.ReactNode ;
	value: string;
}

const AccordionItem = ({className, children, value }:AccordionItemProps) => (
	<Accordion.Item
		className={classNames(
			"mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-mauve12",
			className,
		)}
		value={value}
	>
		{children}
	</Accordion.Item>
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps{
	className?: string;
	children?: string | React.ReactNode; 
}

const AccordionTrigger = ({ children, className, ...props }: AccordionTriggerProps) => (
	<Accordion.Header className="flex">
		<Accordion.Trigger
			className={classNames(
				"h-20 group flex flex-1 cursor-default items-center justify-between bg-mauve1 px-5 text-[15px] leading-none text-violet11 shadow-[0_1px_0] shadow-mauve6 outline-none hover:bg-mauve2",
				className,
			)}
			{...props}
		>
			{children}
			<p className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
				aria-hidden>
					^
			</p>
				
		</Accordion.Trigger>
	</Accordion.Header>
);
AccordionTrigger.displayName="AccordionTrigger"

interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof Accordion.Content>{
	className?: string;
	children?: React.ReactNode | string ; 
}
const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Content
			className={classNames(
				"overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
				className, "AccordionContent"
			)}
			{...props}
			ref={forwardedRef}
		>
			<div className="px-5 py-[15px]">{children}</div>
		</Accordion.Content>
	),
);
AccordionContent.displayName = "AccordionContent";

export {AccordionDemo, AccordionContent, AccordionItem, AccordionTrigger};

//  5:37 + 1:42 = 6:39 + 40 => 7:22시간 공부 (6:31분에)