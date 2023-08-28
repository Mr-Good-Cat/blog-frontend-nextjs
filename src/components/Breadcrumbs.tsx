import { ArticleBreadcrumbs } from "@/api/blog/article.get";
import Link from "next/link";
import ChevronRight from "@/components/icons/ChevronRight";

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: ArticleBreadcrumbs[];
}) {
  return (
    <div className="flex overflow-y-auto whitespace-nowrap items-center">
      <Link
        href="/"
        className="underline text-blue-500 hover:text-blue-300 mr-2"
      >
        Home
      </Link>

      {breadcrumbs.map((b) => {
        return (
          <>
            <div className="mx-2 text-gray-400">
              <ChevronRight />
            </div>

            <Link
              href={b.url}
              key={b.url}
              className="underline text-blue-500 hover:text-blue-300 mr-2"
            >
              {b.title}
            </Link>
          </>
        );
      })}
    </div>
  );
}
