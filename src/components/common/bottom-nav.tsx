'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const bottomNavLinkVariants = cva(
  'flex items-center justify-center p-4 text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'text-gray-500',
        active: 'text-blue-500 border-t-2 border-blue-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface BottomNavLinkProps
  extends VariantProps<typeof bottomNavLinkVariants> {
  to: string;
  label: string;
}

const BottomNavLink = ({ to, label }: BottomNavLinkProps) => {
  const pathname = usePathname(); // 현재 경로 가져오기
  const isActive = pathname === to; // 활성 상태 확인

  return (
    <Link
      href={to}
      className={cn(
        bottomNavLinkVariants({ variant: isActive ? 'active' : 'default' }),
      )}
    >
      {label}
    </Link>
  );
};

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-white border-t border-gray-200">
      <BottomNavLink to="/" label="홈" />
      <BottomNavLink to="/notifications" label="알림" />
      <BottomNavLink to="/mypage" label="마이페이지" />
    </nav>
  );
};

export default BottomNavigation;
