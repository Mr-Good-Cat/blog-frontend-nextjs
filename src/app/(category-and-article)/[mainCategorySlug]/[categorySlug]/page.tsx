export default function CategoryPage({ params }: {params: { mainCategorySlug: string, categorySlug: string }}) {
  return (
    <div>
      { params.mainCategorySlug } {'>'} { params.categorySlug }
    </div>
  )
}
