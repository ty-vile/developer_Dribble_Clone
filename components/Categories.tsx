"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { categoryFilters } from "@/constants";

const Categories = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const handleTags = (filter: string) => {
    if (filter !== "Clear All Filters")
      return router.push(`${pathName}?category=${filter}`);

    return router.push("/");
  };

  return (
    <div className="w-full flex items-center space-between flex-wrap mb-6">
      <ul className="flex gap-2 overflow-auto hideScroll">
        {categoryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleTags(filter)}
            className={`${
              category === filter
                ? " bg-purple-500 border-4 border-black text-white font-medium "
                : " font-normal border-4 border-purple-500"
            } px-3 py-2 rounded-lg whitespace-nowrap`}
          >
            {filter}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
