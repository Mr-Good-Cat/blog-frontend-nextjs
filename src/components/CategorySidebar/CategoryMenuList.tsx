"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { AllCategoriesGet } from "@/api/blog/allCategories.get";
import Link from "next/link";
import { MainCategoryGet } from "@/api/blog/mainCategory.get";

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

export default CategoryMenuList;
