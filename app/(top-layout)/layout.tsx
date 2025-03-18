import TopNavigation from '~/components/common/top-nav';

export default function TopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopNavigation />
      </div>
      <div className="pt-[64px] h-[calc(100vh-64px)] overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
