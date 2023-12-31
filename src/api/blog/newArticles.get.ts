export type NewArticlesGet = {
  id: number;

  title: string;

  description: string;

  seoTitle: string;

  seoDescription: string;

  slug: string;

  createdAt: Date;

  url: string;
};

export async function newArticles(
  mainCategorySlug: string,
): Promise<NewArticlesGet[]> {
  const res = await fetch(
    `${process.env.apiDomain}/blog/new-articles/${mainCategorySlug}`,
  );

  return res.json();
}
