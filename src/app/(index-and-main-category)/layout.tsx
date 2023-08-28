import MainCategorySidebar from "@/components/MainCategorySidebar";

export default function MainCategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen overflow-hidden">
      <MainCategorySidebar />

      <div className="relative flex flex-1 flex-wrap justify-between overflow-y-auto overflow-x-hidden px-4 pt-5">
        {children}
      </div>
    </main>
  );
}
