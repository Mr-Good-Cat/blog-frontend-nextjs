import CategoryMenuList from "@/components/CategorySidebar/CategoryMenuList";
import { getAllCategories } from "@/api/blog/allCategories.get";

export default async function CategorySidebar() {
  const allCategories = await getAllCategories();

  return (
    <div className="px-3 pt-5 border-gray-300 border-r absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 -translate-x-full">
      <h3 className="mb-4 text-sm font-semibold text-black">Category list</h3>

      <CategoryMenuList allCategories={allCategories} />
    </div>
  );
}
