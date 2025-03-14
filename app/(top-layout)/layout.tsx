import TopNavigation from '~/components/common/top-nav';

export default function TopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopNavigation />
      {children}
    </div>
  );
}
