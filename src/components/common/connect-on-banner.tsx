import SwitchDemo from './switch';

interface ConnectOnProps {
  handleQuickConnectToggle: (isOn: boolean) => void;
}

const ConnectOnBanner = ({ handleQuickConnectToggle }: ConnectOnProps) => {
  return (
    <div className="w-full bg-mauve11 px-5 py-3 rounded-xl mb-8 relative flex">
      <div>
        <p className="text-base font-semibold flex-2">네트워킹 ON</p>
        <p className="text-xs">참여를 원하지 않는다면 스위치를 꺼도 돼요</p>
      </div>
      <div className="relative -top-2 left-0 text-xs text-transparent flex-1 w-42">
        <SwitchDemo onToggle={handleQuickConnectToggle} />
      </div>
    </div>
  );
};

export default ConnectOnBanner;
