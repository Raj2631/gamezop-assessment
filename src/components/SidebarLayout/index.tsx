"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";
import SearchInput from "../SearchInput";
import Footer from "../Footer";
import { usePathname } from "next/navigation";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <>
      <Sidebar isNavOpen={isNavOpen} />
      <div className="bg-darkBlue md:pl-[24rem] mx-auto md:w-full h-screen overflow-auto ">
        <div className="w-11/12 mx-auto md:mx-0 h-full flex flex-col max-w-screen-2xl">
          <div className="flex-grow shrink-0 basis-auto">
            <nav className="h-24 block gap-4 flex justify-between w-full items-center">
              <Link
                href="/favorites"
                className="flex hover:text-white items-center"
              >
                <Heart />{" "}
                <span className="ml-2 hidden md:block text-lg">
                  My Favorites
                </span>
              </Link>
              <SearchInput />
              <button
                className=" md:hidden flex items-center text-blue-500"
                onClick={toggleNav}
              >
                {isNavOpen ? <X /> : <Menu />}
              </button>
            </nav>
            <main className=" w-11/12 mx-auto md:mx-0 my-6">{children}</main>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
