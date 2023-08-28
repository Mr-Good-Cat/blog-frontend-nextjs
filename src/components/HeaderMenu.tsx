import { getMainCategory } from "@/api/blog/mainCategory.get";
import NavLink from "@/components/NavLink";

export default async function HeaderMenu() {
  const mainCategoryList = await getMainCategory();

  return (
    <div className="flex items-center ">
      <ul className="flex items-center">
        {mainCategoryList.map((mc) => {
          return (
            <NavLink
              key={mc.id}
              href={`${mc.url}/all`}
              className="mr-2 text-gray-700 hover:text-blue-300 border rounded-full px-2"
              notActiveClass="border-transparent"
              activeClass="border-blue-500"
            >
              <li>{mc.title}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
