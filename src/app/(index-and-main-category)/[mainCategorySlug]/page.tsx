import { newArticles } from "@/api/blog/newArticles.get";
import Link from "next/link";
import Image from "next/image";

export default async function MainCategoryPage({
  params,
}: {
  params: { mainCategorySlug: string };
}) {
  const newArticleList = await newArticles(params.mainCategorySlug);

  return newArticleList.map((a) => {
    return (
      <div
        key={a.id}
        className="w-0.5 h-72 relative border border-gray-300 rounded-md bg-white mb-4"
      >
        <div className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"></div>
        <Image
          src="/cat.jpg"
          alt="cat"
          layout={"fill"}
          className="z-0 object-cover"
        />
        <Link key={a.id} href={a.url}>
          <div className="w-full p-4 absolute bottom-0 left-0 z-20 text-white hover:text-blue-300">
            <p className="text-2xl  font-semibold ">{a.title}</p>
            <p className="">{a.description}</p>
          </div>
        </Link>
      </div>
    );
  });
}
