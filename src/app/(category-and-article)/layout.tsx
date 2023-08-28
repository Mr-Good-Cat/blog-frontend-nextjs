import CategoryMenuList from "@/components/CategorySidebar/CategoryMenuList";
import { getAllCategories } from "@/api/blog/allCategories.get";
import CategorySidebar from "@/components/CategorySidebar";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen overflow-hidden">
      <CategorySidebar />

      <div className="relative flex flex-1 flex-wrap justify-between overflow-y-auto overflow-x-hidden px-4 pt-5">
        {children}
      </div>
    </main>
  );
}
