export type ArticleBreadcrumbs = {
  title: string;
  url: string;
};

export type ArticleGet = {
  id: number;

  title: string;

  description: string;

  seoTitle: string;

  seoDescription: string;

  slug: string;

  createdAt: Date;

  url: string;

  breadcrumbs: ArticleBreadcrumbs[];
};

export async function article(
  mainCategorySlug: string,
  categorySlug: string,
  articleSlug: string,
): Promise<ArticleGet> {
  const res = await fetch(
    `${process.env.apiDomain}/blog/${mainCategorySlug}/${categorySlug}/${articleSlug}`,
  );

  return res.json();
}
