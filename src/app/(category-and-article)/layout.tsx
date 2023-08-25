import CategoryMenuList from "@/component/CategoryMenuList";
import { getAllCategories } from "@/api/blog/allCategories.get";

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allCategories = await getAllCategories();

  return (
    <main className="flex h-screen overflow-hidden">
      <div className="px-3 pt-5 border-gray-300 border-r absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 -translate-x-full">
        <h3 className="mb-4 text-sm font-semibold text-black">Category list</h3>

        <CategoryMenuList allCategories={allCategories} />
      </div>
      <div className="relative flex flex-1 flex-wrap justify-between overflow-y-auto overflow-x-hidden px-4 pt-5">
        {children}
      </div>
    </main>
  );
}
