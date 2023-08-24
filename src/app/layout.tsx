import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getMainCategory } from "@/api/blog/mainCategory.get";

export const metadata: Metadata = {
  title: "Index page",
  description: "Index page description",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainCategoryList = await getMainCategory();

  return (
    <html lang="en">
      <body>
        <header className="flex bg-white border w-full border-gray-300 p-4 items-center">
          <Link href="/">
            <Image
              className="mr-14"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </Link>
          <div className="flex items-center ">
            <ul className="flex items-center">
              {mainCategoryList.map((mc) => {
                return (
                  <Link
                    key={mc.id}
                    href={`${mc.url}/all`}
                    className="mr-2 text-gray-700 hover:text-blue-300"
                  >
                    <li>{mc.title}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
