import * as React from 'react';
import * as Switch from '@radix-ui/react-switch';

interface ToggleSwitchProps {
  toggle: boolean;
  setToggle: (checked: boolean) => void;
}

const ToggleSwitch = ({ toggle, setToggle }: ToggleSwitchProps) => {
  return (
    <div
      className={`flex items-center rounded-full w-[41px] cursor-pointer  ${toggle ? 'bg-orange-400' : 'bg-gray-warm-700'}`}
    >
      <Switch.Root
        id="quick-connect"
        className="relative w-full h-[22px] rounded-full"
        checked={toggle}
        onCheckedChange={(checked) => setToggle(checked)}
      >
        <Switch.Thumb className="absolute left-[2px] top-1/2 transform -translate-y-1/2 h-[18px] w-[18px] rounded-2xl bg-white transition-transform duration-200 data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  );
};

export default ToggleSwitch;
