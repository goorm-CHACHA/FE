export default function PreRegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen py-16 px-6 flex flex-col items-center">
      <div className="flex justify-between w-1/2"></div>
      {children}
    </div>
  );
}
