"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { AllCategoriesGet } from "@/api/blog/allCategories.get";
import Link from "next/link";
import { MainCategoryGet } from "@/api/blog/mainCategory.get";
import NavLink from "@/components/NavLink";

function CategoryMenuList({
  allCategories,
}: {
  allCategories: AllCategoriesGet;
}) {
  const segment: MainCategoryGet["slug"] | null = useSelectedLayoutSegment();

  if (!segment) {
    return null;
  }

  const categoryList = allCategories[segment];

  return (
    <div>
      <ul>
        {categoryList.map((mc) => {
          return (
            <NavLink
              key={mc.id}
              href={mc.url}
              className="mr-2 hover:text-blue-300"
              notActiveClass="text-gray-700"
              activeClass="text-blue-500"
            >
              <li>{mc.title}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryMenuList;
