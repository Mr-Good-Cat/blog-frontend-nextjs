import { NewArticlesGet } from "@/api/blog/newArticles.get";

export type NestedArticlesGet = {
  id: number;

  title: string;

  description: string;

  seoTitle: string;

  seoDescription: string;

  slug: string;

  createdAt: Date;

  url: string;
};

export async function nestedArticles(
  mainCategorySlug: string,
  categorySlug: string,
): Promise<NewArticlesGet[]> {
  const res = await fetch(
    `${process.env.apiDomain}/blog/${mainCategorySlug}/${categorySlug}/articles`,
  );

  return res.json();
}
