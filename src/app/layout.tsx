import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/icons/Logo";
import { homePageUrl } from "@/helpers/router";
import HeaderMenu from "@/components/HeaderMenu";

export const metadata: Metadata = {
  title: "Index page",
  description: "Index page description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex bg-white border w-full border-gray-300 p-4 items-center">
          <Link href={homePageUrl()}>
            <Logo />
          </Link>

          <HeaderMenu />
        </header>

        {children}
      </body>
    </html>
  );
}
