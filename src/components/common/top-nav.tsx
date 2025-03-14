'use client';
import Link from 'next/link';
import SwitchDemo from './switch';

interface TopNavigationProps {
  onQuickConnectToggle?: (isOn: boolean) => void;
  title?: string;
  showQR?: boolean;
  className?: string;
}

const TopNavigation = ({
  onQuickConnectToggle,
  title,
  showQR = true,
  className,
}: TopNavigationProps) => {
  return (
    <nav
      className={`flex justify-between items-center bg-white border-b border-gray-200 px-4 py-4 ${className}`}
    >
      <div className="w-1/3">
        {onQuickConnectToggle && <SwitchDemo onToggle={onQuickConnectToggle} />}
      </div>
      <div className="w-1/3 flex justify-center">
        {title && <h1 className="text-lg font-medium">{title}</h1>}
      </div>
      <div className="w-1/3 flex justify-end">
        {showQR && (
          <Link href="/qr" className="text-gray-500 font-medium">
            큐알
          </Link>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;
