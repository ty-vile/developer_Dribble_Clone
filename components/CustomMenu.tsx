import { Menu } from "@headlessui/react";
import Image from "next/image";

type CustomMenuProps = {
  title: string;
  state: string;
  filters: Array<string>;
  setState: (value: string) => void;
};

function CustomMenu({ title, state, filters, setState }: CustomMenuProps) {
  return (
    <div className="flex flex-col w-full  relative">
      <label htmlFor={title} className="w-full text-sm text-gray-400 mb-2">
        {title}
      </label>
      <Menu as="div" className="relative">
        <div className="flex items-center justify-between p-2 bg-gray-100 w-[200px] rounded-md ">
          <Menu.Button className="flex items-center justify-between w-full text-gray-400">
            {state || "Select a category"}
            <Image
              src="/arrow-down.svg"
              width={10}
              height={5}
              alt="Open custom menu icon"
            />
          </Menu.Button>
        </div>
        <Menu.Items className="flex justify-start w-[200px] gap-4 h-32 overflow-y-scroll shadow-md items-start flex-col">
          {filters.map((filter) => (
            <Menu.Item key={filter} className="p-2">
              <button
                type="button"
                value={filter}
                className="flex items-start w-full hover:bg-red-100"
                onClick={(e) => setState(e.currentTarget.value)}
              >
                {filter}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default CustomMenu;
