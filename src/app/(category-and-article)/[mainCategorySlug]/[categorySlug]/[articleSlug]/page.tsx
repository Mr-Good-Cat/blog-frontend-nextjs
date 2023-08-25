export default function ArticlePage({
  params,
}: {
  params: {
    mainCategorySlug: string;
    categorySlug: string;
    articleSlug: string;
  };
}) {
  return (
    <div>
      {params.mainCategorySlug} {">"} {params.categorySlug} {">"}{" "}
      {params.articleSlug}
    </div>
  );
}
