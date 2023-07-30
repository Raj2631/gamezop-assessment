import { ROUTES } from "@/commons/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Sidebar = ({ isNavOpen }: { isNavOpen: boolean }) => {
  const pathname = usePathname();
  return (
    <div
      className={`md:block ${
        isNavOpen ? "" : "-translate-x-full md:translate-x-0"
      } bg-darkPurple absolute w-[300px] h-screen top-0 left-0 z-10 fixed `}
    >
      <div>
        <h1 className="text-hotPink my-8 text-left  pl-14  w-full text-3xl">
          <Link href="/">
            Game<span className="text-gray-300">zop</span>
          </Link>
        </h1>
      </div>
      <nav className="flex w-full flex-col flex-wrap j text-left pl-14 gap-4 text-xl justify-center  mx-auto ">
        {ROUTES.map(({ title, route }) => (
          <div key={route}>
            <Link
              className={`${
                pathname === route
                  ? "text-white font-semibold"
                  : "hover:text-white hover:font-semibold"
              }`}
              href={route}
            >
              {title}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
