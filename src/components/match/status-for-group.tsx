
const circleColorMapping: Record<string, string> = {
    available: 'bg-[#07ca7f]',
    networking: 'bg-[#ff5050]',
    joined: 'bg-[#ff9257]',
  };
  

  const statusLabels: Record<string, string> = {
    available: '참여 가능',
    networking: '네트워킹 진행중',
    joined: '참여중',
  };

interface StatusForGroupProps {
    variants: string; 
    className?: string; 
}


const StatusForGroup = ({ variants, className }: StatusForGroupProps) => {
return (
// <div className="w-full relative rounded-radius-8 bg-gray-900 flex flex-row items-center justify-start py-spacing-8 px-spacing-12 box-border gap-spacing-6 text-left text-xs text-white font-body5-normal-b-12">
<div className={`w-full relative rounded-2xl bg-gray-900 flex flex-row items-center justify-start py-2 px-4 box-border gap-2 text-left text-xs text-white font-body5-normal-b-12 mt-2 ${className}`}>
  <div className={`w-2 relative rounded-[50%] bg-green-500 h-2 ${circleColorMapping[variants]} `} />
  <div className="flex flex-row items-center justify-start"></div>
  <div className="relative tracking-[-0.02em] leading-[140%] font-semibold">{statusLabels[variants]}</div>
</div>);
};
export default StatusForGroup;