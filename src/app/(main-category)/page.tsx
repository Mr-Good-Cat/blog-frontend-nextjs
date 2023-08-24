import { getMainCategory } from "@/api/blog/mainCategory.get";
import MainCategoryPage from "@/app/(main-category)/[mainCategorySlug]/page";

export default async function Home() {
  const mainCategoryList = await getMainCategory();

  return (
    <MainCategoryPage params={{ mainCategorySlug: mainCategoryList[0].slug }} />
  );
}
