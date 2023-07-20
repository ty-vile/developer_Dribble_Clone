"use client";

import { useRouter } from "next/navigation";
import CustomButton from "../Buttons/CustomButton";

type Props = {
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

const Pagination = ({
  startCursor,
  endCursor,
  hasPreviousPage,
  hasNextPage,
}: Props) => {
  const router = useRouter();

  const handleNavigation = (direction: string) => {
    const currentParams = new URLSearchParams(window.location.search);

    if (direction === "next" && hasNextPage) {
      currentParams.delete("startcursor");
      currentParams.set("endcursor", endCursor);
    } else if (direction === "first" && hasPreviousPage) {
      currentParams.delete("endcursor");
      currentParams.set("startcursor", startCursor);
    }

    const newSearchParams = currentParams.toString();

    const newPathname = `${window.location.pathname}?${newSearchParams}`;

    router.push(newPathname);
  };

  return (
    <div className="w-full flex items-center justify-center mt-6">
      {hasPreviousPage && (
        <CustomButton
          title="First Page"
          bgColor="bg-purple-500"
          textColor="text-white"
          handleClick={() => handleNavigation("first")}
        />
      )}
      {hasNextPage && (
        <CustomButton
          title="Next Page"
          bgColor="bg-purple-500"
          textColor="text-white"
          handleClick={() => handleNavigation("next")}
        />
      )}
    </div>
  );
};

export default Pagination;
