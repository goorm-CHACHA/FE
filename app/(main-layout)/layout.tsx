import BottomNavigation from '~/components/common/bottom-nav';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <BottomNavigation />
    </div>
  );
}
