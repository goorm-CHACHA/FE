import * as React from 'react';
import * as Switch from '@radix-ui/react-switch';

interface SwitchDemoProps {
  onToggle: (isOn: boolean) => void; // 함수 타입 명시
}

const SwitchDemo: React.FC<SwitchDemoProps> = ({ onToggle }) => {
  const [isOn, setIsOn] = React.useState(false);

  const handleToggle = (checked: boolean) => {
    setIsOn(checked);
    onToggle(checked); // 부모로 상태 전달
  };

  return (
    <div className="absolute top-0 left-0 p-4">
      <div className="flex items-center">
        <label
          htmlFor="quick-connect"
          className="pr-[15px] text-[15px] leading-none"
        >
          퀵 커넥트
        </label>
        <Switch.Root
          id="quick-connect"
          className="relative h-[25px] w-[42px] cursor-pointer rounded-full bg-blackA6 shadow-[0_2px_10px] shadow-blackA4 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black"
          checked={isOn}
          onCheckedChange={handleToggle} // 상태 변경 시 호출
          style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
        >
          <Switch.Thumb className="block size-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </Switch.Root>
      </div>
    </div>
  );
};

export default SwitchDemo;
