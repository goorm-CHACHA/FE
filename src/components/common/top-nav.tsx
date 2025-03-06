'use client';
import Link from 'next/link';
import SwitchDemo from './switch';

interface TopNavigationProps {
  onQuickConnectToggle: (isOn: boolean) => void;
  className?: string;
}

const TopNavigation = ({ onQuickConnectToggle }: TopNavigationProps) => {
  return (
    <nav className="flex justify-start items-center bg-white border-b border-gray-200 px-4 py-4">
      <SwitchDemo onToggle={onQuickConnectToggle} />
      <Link href="/qr" className="text-grey-500 font-medium ml-auto">
        큐알
      </Link>
    </nav>
  );
};

export default TopNavigation;
