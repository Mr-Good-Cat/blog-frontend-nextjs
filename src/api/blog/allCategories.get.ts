import { MainCategoryGet } from "@/api/blog/mainCategory.get";

export type Category = {
  id: number;

  title: string;

  seoTitle: string;

  seoDescription: string;

  slug: string;

  url: string;
};

export type AllCategoriesGet = {
  [key in MainCategoryGet["slug"]]: Category[];
};

export async function getAllCategories(): Promise<AllCategoriesGet> {
  const res = await fetch("http://localhost:3000/blog/all-categories");

  const json = await res.json();

  return json.result;
}
