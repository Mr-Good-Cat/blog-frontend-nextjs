import { article as articleRequest } from "@/api/blog/article.get";
import Link from "next/link";
import ChevronRight from "@/components/ChevronRight";

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
      <div className="flex overflow-y-auto whitespace-nowrap items-center">
        <Link
          href="/"
          className="underline text-blue-300 hover:text-blue-500 mr-2"
        >
          Home
        </Link>

        {article.breadcrumbs.map((b) => {
          return (
            <>
              <div className="mx-2 text-gray-400">
                <ChevronRight />
              </div>

              <Link
                href={b.url}
                key={b.url}
                className="underline text-blue-300 hover:text-blue-500 mr-2"
              >
                {b.title}
              </Link>
            </>
          );
        })}
      </div>
      <h3 className="text-center font-semibold text-xl mb-2">
        {article.title}
      </h3>
      <div>{article.description}</div>
    </div>
  );
}
