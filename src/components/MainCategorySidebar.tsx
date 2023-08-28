import Link from "next/link";
import { getMainCategory } from "@/api/blog/mainCategory.get";

export default async function MainCategorySidebar() {
  const mainCategoryList = await getMainCategory();

  return (
    <div className="px-3 pt-5 border-gray-300 border-r absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 -translate-x-full">
      <h3 className="mb-4 text-sm font-semibold text-black">Main category</h3>

      <ul>
        {mainCategoryList.map((mc) => {
          return (
            <Link
              key={mc.id}
              href={mc.url}
              className="mr-2 text-gray-700 hover:text-blue-300"
            >
              <li>{mc.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
