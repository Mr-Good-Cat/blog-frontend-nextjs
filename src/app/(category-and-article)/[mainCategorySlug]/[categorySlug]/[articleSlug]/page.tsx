import { article as articleRequest } from "@/api/blog/article.get";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function ArticlePage({
  params,
}: {
  params: {
    mainCategorySlug: string;
    categorySlug: string;
    articleSlug: string;
  };
}) {
  const article = await articleRequest(
    params.mainCategorySlug,
    params.categorySlug,
    params.articleSlug,
  );

  return (
    <div className="bg-white w-full p-4">
      <Breadcrumbs breadcrumbs={article.breadcrumbs} />

      <h3 className="text-center font-semibold text-xl mb-2">
        {article.title}
      </h3>
      <div>{article.description}</div>
    </div>
  );
}
