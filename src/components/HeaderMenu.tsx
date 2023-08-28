import { getMainCategory } from "@/api/blog/mainCategory.get";
import Link from "next/link";

export default async function HeaderMenu() {
  const mainCategoryList = await getMainCategory();

  return (
    <div className="flex items-center ">
      <ul className="flex items-center">
        {mainCategoryList.map((mc) => {
          return (
            <Link
              key={mc.id}
              href={`${mc.url}/all`}
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
