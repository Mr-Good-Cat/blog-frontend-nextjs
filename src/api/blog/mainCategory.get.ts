export type MainCategoryGet = {
  id: number;

  title: string;

  seoTitle: string;

  seoDescription: string;

  slug: string;

  url: string;
};

export async function getMainCategory(): Promise<MainCategoryGet[]> {
  const res = await fetch(`${process.env.apiDomain}/blog/main-category`);

  return res.json();
}
