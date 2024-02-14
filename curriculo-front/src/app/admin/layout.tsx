export default function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-500">
      <div className="w-[60%] h-screen bg-teal-200 grid grid-cols-12 grid-rows-12">
        {children}
      </div>
    </main>
  );
}
