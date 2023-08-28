"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  key?: number | string;
  className: string;
  activeClass?: string;
  notActiveClass?: string;
};

export default function NavLink({
  children,
  href,
  key,
  className,
  activeClass,
  notActiveClass,
}: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      key={key}
      className={`${className} ${
        href === pathname ? activeClass : notActiveClass
      }`}
    >
      {children}
    </Link>
  );
}
